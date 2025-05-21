"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSchedules } from "@/hooks/useSchedules";
import { useCourses } from "@/hooks/useCourses";
import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DAYS_OF_WEEK = [
  "Samedi",
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
];

const TeacherSchedule: FC = () => {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/sign-in");
    },
  });

  const {
    schedules,
    isLoading: schedulesLoading,
    error: schedulesError,
  } = useSchedules();
  const {
    courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useCourses();

  // Filter schedules for the current professo
  console.log("session?.user?.name", session?.user?.section_id);
  const studentSchedules = schedules.filter((schedule) => {
    const course = courses.find((c) => c.id === schedule.course_id);

    return course?.section?.id === session?.user?.section_id;
  });

  // Group schedules by day
  const schedulesByDay = DAYS_OF_WEEK.reduce((acc, day) => {
    acc[day] = studentSchedules.filter((schedule) => schedule.day === day);
    return acc;
  }, {} as Record<string, typeof studentSchedules>);

  // Format time from ISO string to readable format
  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  if (status === "loading" || schedulesLoading || coursesLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (schedulesError || coursesError) {
    return (
      <div className="p-6">
        <div className="bg-red-50 text-red-800 p-4 rounded-md">
          {schedulesError || coursesError}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Emploi du temps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DAYS_OF_WEEK.map((day) => (
              <Card key={day} className="bg-white border-none shadow-lg">
                <CardHeader className="border-b bg-gray-50">
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {schedulesByDay[day]?.length > 0 ? (
                    <div className="space-y-4">
                      {schedulesByDay[day].map((schedule) => {
                        const course = courses.find(
                          (c) => c.id === schedule.course_id
                        );
                        return (
                          <div
                            key={schedule.id}
                            className="bg-gray-50 p-4 rounded-lg space-y-2"
                          >
                            <div className="flex justify-between items-center">
                              <Badge variant="secondary" className="text-sm">
                                {course?.name || `Cours ${schedule.course_id}`}
                              </Badge>
                              <span className="text-sm text-gray-500">
                                {formatTime(schedule.start_time)} -{" "}
                                {formatTime(schedule.end_time)}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600">
                              Salle: {schedule.room}
                            </div>
                            {course?.section && (
                              <div className="text-sm text-gray-600">
                                Section: {course.section.name} - Année{" "}
                                {course.section.year}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 text-center py-4">
                      Aucun cours prévu
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherSchedule;
