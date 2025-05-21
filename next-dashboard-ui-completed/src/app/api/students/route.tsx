import { getServerSession } from "next-auth";
import prisma from "../../../lib/prisma.js";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }
    if (session.user?.role === "admin") {
      // Fetch all students
      const students = await prisma.students.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          section_id: true,
        },
        orderBy: {
          name: "asc",
        },
      });

      return NextResponse.json(
        {
          students,
          total: students.length,
        },
        { status: 200 }
      );
    }
    if (session.user?.role === "student") {
      const students = await prisma.students.findMany({
        where: {
          id: session.user.id,
        },

        select: {
          id: true,
          name: true,
          email: true,
          section_id: true,
        },
      });
      return NextResponse.json(
        {
          students,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}
