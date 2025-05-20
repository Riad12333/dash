import { getServerSession } from "next-auth";
import prisma from "../../../../lib/prisma.js";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function DELETE(
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

    // Check if user is admin
    if (session.user?.role !== "admin") {
      return NextResponse.json(
        { error: "Only administrators can delete courses" },
        { status: 403 }
      );
    }

    const courseId = parseInt(params.id);

    // Delete the course and its associated schedules in a transaction
    await prisma.$transaction(async (tx) => {
      // First delete all schedules associated with the course
      await tx.schedules.deleteMany({
        where: {
          course: courseId,
        },
      });

      // Then delete the course
      await tx.courses.delete({
        where: {
          id: courseId,
        },
      });
    });

    return NextResponse.json(
      { message: "Course deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting course:", error);
    return NextResponse.json(
      { error: "Failed to delete course" },
      { status: 500 }
    );
  }
}
