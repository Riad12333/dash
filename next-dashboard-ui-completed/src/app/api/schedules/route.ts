import { getServerSession } from "next-auth";
import prisma from "../../../lib/prisma.js";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const courseId = searchParams.get("courseId");

    // Fetch schedules
    const schedules = await prisma.schedules.findMany({
      where: courseId
        ? {
            courses: {
              id: parseInt(courseId),
            },
          }
        : undefined,
      include: {
        courses: true,
        classrooms: true,
      },
      orderBy: {
        start_time: "asc",
      },
    });

    // Transform the data to match our interface
    const transformedSchedules = schedules.map((schedule) => ({
      id: schedule.id,
      course_id: schedule.courses?.id || 0,
      day: schedule.day_of_week,
      start_time: schedule.start_time.toISOString(),
      end_time: schedule.end_time.toISOString(),
      room: schedule.classrooms?.name || "N/A",
    }));

    return NextResponse.json(
      {
        schedules: transformedSchedules,
        total: transformedSchedules.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedules" },
      { status: 500 }
    );
  }
}
