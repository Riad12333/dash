import { getServerSession } from "next-auth";
import prisma from "../../../lib/prisma.js";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }
    // Parse URL to get query parameters
    const url = new URL(request.url);
    const sectionId = url.searchParams.get("section");

    // Validate section parameter
    if (!sectionId) {
      return NextResponse.json(
        { error: "Section parameter is required" },
        { status: 400 }
      );
    }

    // Fetch groups for the specified section
    const groups = await prisma.groups.findMany({
      where: {
        section_id: parseInt(sectionId),
      },
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(
      {
        groups,
        total: groups.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching groups:", error);
    return NextResponse.json(
      { error: "Failed to fetch groups" },
      { status: 500 }
    );
  }
}
