import { getServerSession } from "next-auth";
import prisma from "../../../lib/prisma.js";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { z } from "zod";

interface AttendanceRecord {
  id: string;
  studentName: string;
  studentId: string;
  course: string;
  date: string;
  time: string;
  status: "present" | "absent" | "late";
  verifiedBy: string;
  fingerprintVerified: boolean;
}

// Simuler une base de données en mémoire
let attendanceRecords: AttendanceRecord[] = [];

// Validation schema for date filters
const dateFilterSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  studentId: z.string().optional(),
  courseId: z.string().optional(),
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

    // Fetch all attendance records with related data
    const attendance = await prisma.attendance.findMany({
      include: {
        students: {
          select: {
            id: true,
            name: true,
            email: true,
            fingerprint_id: true,
          },
        },
        courses: {
          select: {
            id: true,
            name: true,
            professors: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
      orderBy: {
        timestamp: "desc",
      },
    });

    // Transform the data to include formatted dates and complete information
    const formattedAttendance = attendance.map((record) => ({
      id: record.id,
      timestamp: record.timestamp,
      status: record.statut,
      student: record.students
        ? {
            id: record.students.id,
            name: record.students.name,
            email: record.students.email,
            fingerprint_id: record.students.fingerprint_id,
          }
        : null,
      course: record.courses
        ? {
            id: record.courses.id,
            name: record.courses.name,
            professor: record.courses.professors
              ? {
                  id: record.courses.professors.id,
                  name: record.courses.professors.name,
                  email: record.courses.professors.email,
                }
              : null,
          }
        : null,
      formattedDate: record.timestamp.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    }));

    return NextResponse.json(
      {
        attendance: formattedAttendance,
        total: formattedAttendance.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching attendance records:", error);
    return NextResponse.json(
      { error: "Failed to fetch attendance records" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const data = await request.json();

    // Create the attendance record
    const attendance = await prisma.attendance.create({
      data: {
        student_id: data.student_id,
        course_id: data.course_id,
        statut: data.status,
        timestamp: new Date(),
      },
      include: {
        students: {
          select: {
            id: true,
            name: true,
            email: true,
            fingerprint_id: true,
          },
        },
        courses: {
          select: {
            id: true,
            name: true,
            professors: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(attendance, { status: 201 });
  } catch (error) {
    console.error("Error creating attendance record:", error);
    return NextResponse.json(
      { error: "Failed to create attendance record" },
      { status: 500 }
    );
  }
}
