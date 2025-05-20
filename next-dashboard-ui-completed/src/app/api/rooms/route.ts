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

    // Fetch all rooms
    const rooms = await prisma.classrooms.findMany({
      select: {
        id: true,
        name: true,
        capacity: true,
        status: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(
      {
        rooms,
        total: rooms.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return NextResponse.json(
      { error: "Failed to fetch rooms" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    // Check if user is admin
    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const body = await request.json();
    const { name, capacity, is_available } = body;

    // Validate required fields
    if (!name || !capacity) {
      return NextResponse.json(
        { error: "Room name and capacity are required" },
        { status: 400 }
      );
    }

    // Validate capacity is a positive number
    if (capacity <= 0) {
      return NextResponse.json(
        { error: "Capacity must be a positive number" },
        { status: 400 }
      );
    }

    // Check if room with same name already exists
    const existingRoom = await prisma.classrooms.findFirst({
      where: {
        name: name,
      },
    });

    if (existingRoom) {
      return NextResponse.json(
        { error: "A room with this name already exists" },
        { status: 400 }
      );
    }

    // Create new room
    const room = await prisma.classrooms.create({
      data: {
        name: name,
        capacity: parseInt(capacity),
        status: is_available ? "available" : "unavailable", // Default to true if not provided
      },
    });

    return NextResponse.json(
      {
        message: "Room created successfully",
        room,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating room:", error);
    return NextResponse.json(
      { error: "Failed to create room" },
      { status: 500 }
    );
  }
}
