import { getServerSession } from "next-auth";
import prisma from "../../../lib/prisma.js";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { z } from "zod";

// Validation schema for course creation
const createCourseSchema = z.object({
  name: z.string().min(2, "Course name must be at least 2 characters"),
  professor_id: z.number(),
  section_id: z.number(),
  schedules: z.array(
    z.object({
      day: z.string(),
      start_time: z.string(),
      end_time: z.string(),
      room: z.string(),
    })
  ),
});

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
      // Fetch all courses with related professor data
      const courses = await prisma.courses.findMany({
        include: {
          professors: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          attendance: {
            select: {
              id: true,
              timestamp: true,
              statut: true,
            },
          },
          sections: {
            select: {
              id: true,
              name: true,
              academic_year_id: true,
            },
          },
        },
      });

      // Transform the data to include additional statistics
      const transformedCourses = courses.map((course) => ({
        id: course.id,
        name: course.name,
        professor: course.professors
          ? {
              id: course.professors.id,
              name: course.professors.name,
              email: course.professors.email,
            }
          : null,
        section: course.sections
          ? {
              id: course.sections.id,
              name: course.sections.name,
              year: course.sections.academic_year_id,
            }
          : null,
        totalSessions: course.attendance.length,
        attendanceRate:
          course.attendance.length > 0
            ? (course.attendance.filter(
                (a) => a.statut?.toLowerCase() === "present"
              ).length /
                course.attendance.length) *
              100
            : 0,
      }));
      return NextResponse.json(
        {
          courses: transformedCourses,
          total: transformedCourses.length,
        },
        { status: 200 }
      );
    }

    if (session.user?.role === "teacher") {
      const courses = await prisma.courses.findMany({
        where: {
          professeur_id: session.user.id,
        },
        include: {
          professors: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          attendance: {
            select: {
              id: true,
              timestamp: true,
              statut: true,
            },
          },
          sections: {
            select: {
              id: true,
              name: true,
              academic_year_id: true,
            },
          },
        },
      });
      const transformedCourses = courses.map((course) => ({
        id: course.id,
        name: course.name,
        professor: course.professors
          ? {
              id: course.professors.id,
              name: course.professors.name,
              email: course.professors.email,
            }
          : null,
        section: course.sections
          ? {
              id: course.sections.id,
              name: course.sections.name,
              year: course.sections.academic_year_id,
            }
          : null,
        totalSessions: course.attendance.length,
        attendanceRate:
          course.attendance.length > 0
            ? (course.attendance.filter(
                (a) => a.statut?.toLowerCase() === "present"
              ).length /
                course.attendance.length) *
              100
            : 0,
      }));
      return NextResponse.json(
        {
          courses: transformedCourses,
          total: transformedCourses.length,
        },
        { status: 200 }
      );
    }
    if (session.user?.role === "student") {
      const courses = await prisma.courses.findMany({
        where: {
          section_id: session.user.section_id,
        },
        include: {
          professors: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          attendance: {
            select: {
              id: true,
              timestamp: true,
              statut: true,
            },
          },
          sections: {
            select: {
              id: true,
              name: true,
              academic_year_id: true,
            },
          },
        },
      });
      const transformedCourses = courses.map((course) => ({
        id: course.id,
        name: course.name,
        professor: course.professors
          ? {
              id: course.professors.id,
              name: course.professors.name,
              email: course.professors.email,
            }
          : null,
        section: course.sections
          ? {
              id: course.sections.id,
              name: course.sections.name,
              year: course.sections.academic_year_id,
            }
          : null,
        totalSessions: course.attendance.length,
        attendanceRate:
          course.attendance.length > 0
            ? (course.attendance.filter(
                (a) => a.statut?.toLowerCase() === "present"
              ).length /
                course.attendance.length) *
              100
            : 0,
      }));
      return NextResponse.json(
        {
          courses: transformedCourses,
          total: transformedCourses.length,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    if (session.user?.role !== "admin") {
      return NextResponse.json(
        { error: "Only administrators can create courses" },
        { status: 403 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = createCourseSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors[0].message },
        { status: 400 }
      );
    }

    const { name, professor_id, section_id, schedules } = validationResult.data;

    // Check if professor exists
    const professor = await prisma.professors.findUnique({
      where: { id: professor_id },
    });

    if (!professor) {
      return NextResponse.json(
        { error: "Professor not found" },
        { status: 404 }
      );
    }

    // Check if section exists
    const section = await prisma.sections.findUnique({
      where: { id: section_id },
    });

    if (!section) {
      return NextResponse.json({ error: "Section not found" }, { status: 404 });
    }

    // Verify all classrooms exist before proceeding
    const classroomIds = Array.from(
      new Set(schedules.map((s) => parseInt(s.room)))
    );
    const existingClassrooms = await prisma.classrooms.findMany({
      where: {
        id: {
          in: classroomIds,
        },
      },
      select: {
        id: true,
      },
    });

    if (existingClassrooms.length !== classroomIds.length) {
      return NextResponse.json(
        { error: "One or more classroom IDs are invalid" },
        { status: 400 }
      );
    }

    // Create course with schedules in a transaction
    const course = await prisma.$transaction(async (tx) => {
      // Create the course
      const newCourse = await tx.courses.create({
        data: {
          name,
          professeur_id: professor_id,
          section_id,
          room: schedules[0].room,
        },
        include: {
          professors: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

      // Create schedules for the course
      const schedulePromises = schedules.map((schedule) => {
        // Create a date object for today with the specified time
        const [hours, minutes] = schedule.start_time.split(":");
        const [endHours, endMinutes] = schedule.end_time.split(":");

        const startDate = new Date();
        startDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

        const endDate = new Date();
        endDate.setHours(parseInt(endHours), parseInt(endMinutes), 0, 0);

        return tx.schedules.create({
          data: {
            course: newCourse.id,
            day_of_week: schedule.day,
            start_time: startDate,
            end_time: endDate,
            classroom_id: parseInt(schedule.room),
          },
        });
      });

      const createdSchedules = await Promise.all(schedulePromises);

      return {
        ...newCourse,
        schedules: createdSchedules,
      };
    });

    return NextResponse.json(
      {
        message: "Course created successfully",
        course,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}
