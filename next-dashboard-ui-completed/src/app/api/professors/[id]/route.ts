import { getServerSession } from "next-auth";
import prisma from "../../../../lib/prisma.js";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }
    if (session.user?.role !== "professors") {
      return NextResponse.json(
        { error: "You are not authorized to update this profile" },
        { status: 403 }
      );
    }

    // Check if the user is updating their own profile
    if (session.user?.id !== parseInt(params.id)) {
      return NextResponse.json(
        { error: "You can only update your own profile" },
        { status: 403 }
      );
    }

    const data = await request.json();

    // Update the professor's profile
    const updatedProfessor = await prisma.professors.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        name: data.name,
        email: data.email,
      },
    });

    return NextResponse.json(updatedProfessor, { status: 200 });
  } catch (error) {
    console.error("Error updating professor profile:", error);
    return NextResponse.json(
      { error: "Failed to update professor profile" },
      { status: 500 }
    );
  }
}
