import { getServerSession } from "next-auth";
import prisma from "../../../../lib/prisma.js";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { z } from "zod";

// Validation schema for availability check
const availabilityCheckSchema = z.object({
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

    // Parse and validate request body
    const body = await request.json();
    const validationResult = availabilityCheckSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors[0].message },
        { status: 400 }
      );
    }

    const { professor_id, section_id, schedules } = validationResult.data;

    const conflicts = [];

    // Check professor availability
    for (let i = 0; i < schedules.length; i++) {
      const schedule = schedules[i];
      const [hours, minutes] = schedule.start_time.split(":");
      const [endHours, endMinutes] = schedule.end_time.split(":");

      const startTime = new Date();
      startTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      const endTime = new Date();
      endTime.setHours(parseInt(endHours), parseInt(endMinutes), 0, 0);

      // Check professor's existing schedules
      const professorConflicts = await prisma.schedules.findMany({
        where: {
          courses: {
            professeur_id: professor_id,
          },
          day_of_week: schedule.day,
          OR: [
            {
              AND: [
                { start_time: { lte: startTime } },
                { end_time: { gt: startTime } },
              ],
            },
            {
              AND: [
                { start_time: { lt: endTime } },
                { end_time: { gte: endTime } },
              ],
            },
          ],
        },
        include: {
          courses: true,
        },
      });

      if (professorConflicts.length > 0) {
        conflicts.push({
          index: i,
          type: "professor",
          message: `L'enseignant a déjà un cours à cet horaire (${professorConflicts[0].courses?.name})`,
        });
      }

      // Check room availability
      const roomConflicts = await prisma.schedules.findMany({
        where: {
          classroom_id: parseInt(schedule.room),
          day_of_week: schedule.day,
          OR: [
            {
              AND: [
                { start_time: { lte: startTime } },
                { end_time: { gt: startTime } },
              ],
            },
            {
              AND: [
                { start_time: { lt: endTime } },
                { end_time: { gte: endTime } },
              ],
            },
          ],
        },
        include: {
          courses: true,
        },
      });

      if (roomConflicts.length > 0) {
        conflicts.push({
          index: i,
          type: "room",
          message: `La salle est déjà réservée à cet horaire (${roomConflicts[0].courses?.name})`,
        });
      }

      // Check section availability
      const sectionConflicts = await prisma.schedules.findMany({
        where: {
          courses: {
            section_id: section_id,
          },
          day_of_week: schedule.day,
          OR: [
            {
              AND: [
                { start_time: { lte: startTime } },
                { end_time: { gt: startTime } },
              ],
            },
            {
              AND: [
                { start_time: { lt: endTime } },
                { end_time: { gte: endTime } },
              ],
            },
          ],
        },
        include: {
          courses: true,
        },
      });

      if (sectionConflicts.length > 0) {
        conflicts.push({
          index: i,
          type: "section",
          message: `La section a déjà un cours à cet horaire (${sectionConflicts[0].courses?.name})`,
        });
      }
    }

    return NextResponse.json({
      available: conflicts.length === 0,
      conflicts,
    });
  } catch (error) {
    console.error("Error checking availability:", error);
    return NextResponse.json(
      { error: "Failed to check availability" },
      { status: 500 }
    );
  }
}
