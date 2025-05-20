import { getServerSession } from "next-auth";
import prisma from "../../../lib/prisma.js";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import bcrypt from "bcrypt";
import { z } from "zod";

// Validation schema for user creation
const createUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["admin", "teacher", "student"], {
    errorMap: () => ({ message: "Invalid role" }),
  }),
  fingerprint_id: z.string().optional(),
});

// Validation schema for user deletion
const deleteUserSchema = z.object({
  id: z.number(),
  role: z.enum(["admin", "teacher", "student"], {
    errorMap: () => ({ message: "Invalid role" }),
  }),
});

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Check authentication and admin role
    if (!session) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    if (session.user?.role !== "admin") {
      return NextResponse.json(
        { error: "Only administrators can create users" },
        { status: 403 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = createUserSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors[0].message },
        { status: 400 }
      );
    }

    const { email, name, password, role, fingerprint_id } =
      validationResult.data;

    // Hash the password
    const password_hash = await bcrypt.hash(password, 10);

    // Check if user already exists in any role
    const existingAdmin = await prisma.admins.findUnique({ where: { email } });
    const existingStudent = await prisma.students.findUnique({
      where: { email },
    });
    const existingTeacher = await prisma.professors.findUnique({
      where: { email },
    });

    if (existingAdmin || existingStudent || existingTeacher) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Create user based on role
    let user;
    switch (role) {
      case "admin":
        user = await prisma.admins.create({
          data: {
            email,
            name,
            password_hash,
          },
        });
        break;
      case "student":
        if (!fingerprint_id) {
          return NextResponse.json(
            { error: "Fingerprint ID is required for students" },
            { status: 400 }
          );
        }
        user = await prisma.students.create({
          data: {
            email,
            name,
            password_hash,
            fingerprint_id,
          },
        });
        break;
      case "teacher":
        if (!fingerprint_id) {
          return NextResponse.json(
            { error: "Fingerprint ID is required for teachers" },
            { status: 400 }
          );
        }
        user = await prisma.professors.create({
          data: {
            email,
            name,
            password_hash,
            fingerprint_id,
          },
        });
        break;
    }

    // Return the created user without the password hash
    const { password_hash: _, ...userWithoutPassword } = user;
    return NextResponse.json(
      {
        message: "User created successfully",
        user: { ...userWithoutPassword, role },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    if (session.user?.role !== "admin") {
      return NextResponse.json(
        { error: "Only administrators can access this resource" },
        { status: 403 }
      );
    }

    const [admins, students, professors] = await Promise.all([
      prisma.admins.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          created_at: true,
        },
      }),
      prisma.students.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          created_at: true,
        },
      }),
      prisma.professors.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          created_at: true,
        },
      }),
    ]);

    // Transform the data to include role information
    const users = [
      ...admins.map((user) => ({ ...user, role: "admin" })),
      ...students.map((user) => ({ ...user, role: "student" })),
      ...professors.map((user) => ({ ...user, role: "teacher" })),
    ];

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Check authentication and admin role
    if (!session) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    if (session.user?.role !== "admin") {
      return NextResponse.json(
        { error: "Only administrators can delete users" },
        { status: 403 }
      );
    }

    // Parse URL to get query parameters
    const url = new URL(request.url);
    const id = parseInt(url.searchParams.get("id") || "");
    const role = url.searchParams.get("role");

    // Validate parameters
    const validationResult = deleteUserSchema.safeParse({ id, role });

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors[0].message },
        { status: 400 }
      );
    }

    const { id: userId, role: userRole } = validationResult.data;

    // Delete user based on role
    let deletedUser;
    switch (userRole) {
      case "admin":
        // Prevent deleting the last admin
        const adminCount = await prisma.admins.count();
        if (adminCount <= 1) {
          return NextResponse.json(
            { error: "Cannot delete the last administrator" },
            { status: 400 }
          );
        }
        deletedUser = await prisma.admins.delete({
          where: { id: userId },
        });
        break;

      case "student":
        deletedUser = await prisma.students.delete({
          where: { id: userId },
        });
        break;

      case "teacher":
        deletedUser = await prisma.professors.delete({
          where: { id: userId },
        });
        break;
    }

    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    if ((error as any).code === "P2025") {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
