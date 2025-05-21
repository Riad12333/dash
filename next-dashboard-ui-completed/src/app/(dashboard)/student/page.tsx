"use client";

import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSchedules } from "@/hooks/useSchedules";
import { useCourses } from "@/hooks/useCourses";
import { useAttendance } from "@/hooks/useAttendance";
import {
  Loader2,
  Users,
  BookOpen,
  Calendar,
  GraduationCap,
  Clock,
  MapPin,
  ChevronRight,
  ClipboardList,
  BookText,
} from "lucide-react";

const StudentDashboard: FC = () => {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/sign-in");
    },
  });

  const { schedules, isLoading: schedulesLoading } = useSchedules();
  const { courses, isLoading: coursesLoading } = useCourses();
  const { attendance, isLoading: attendanceLoading } = useAttendance();

  if (
    status === "loading" ||
    schedulesLoading ||
    coursesLoading ||
    attendanceLoading
  ) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }
  console.log("schedules", schedules);
  // Filter schedules and courses for the current student's section
  const studentSchedules = schedules.filter((schedule) => {
    console.log("schedule", schedule);
    return schedule.course_id.section_id === session?.user?.section_id;
  });

  const studentCourses = courses.filter((course) => {
    return studentSchedules.some(
      (schedule) => schedule.course_id.id === course.id
    );
  });

  // Get today's courses
  const today = new Date().toLocaleDateString("fr-FR", { weekday: "long" });
  const todaysCourses = studentSchedules.filter((schedule) => {
    return schedule.day.toLowerCase() === today.toLowerCase();
  });

  // Calculate attendance stats for the student
  const studentAttendance = attendance.filter(
    (record) => record.student.id === session?.user?.id
  );

  const presentCount = studentAttendance.filter(
    (record) => record.status === "present"
  ).length;
  const absentCount = studentAttendance.filter(
    (record) => record.status === "absent"
  ).length;
  const lateCount = studentAttendance.filter(
    (record) => record.status === "late"
  ).length;

  const attendanceRate = studentAttendance.length
    ? Math.round((presentCount / studentAttendance.length) * 100)
    : 0;

  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">
              Total des Cours
            </CardTitle>
            <div className="p-2 bg-blue-100 rounded-full">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700">
              {studentCourses.length}
            </div>
            <p className="text-xs text-blue-600 mt-1">
              Cours inscrits cette année
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-none shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">
              Cours d&apos;Aujourd&apos;hui
            </CardTitle>
            <div className="p-2 bg-green-100 rounded-full">
              <Calendar className="h-5 w-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700">
              {todaysCourses.length}
            </div>
            <p className="text-xs text-green-600 mt-1">
              {todaysCourses.length === 0
                ? "Aucun cours programmé"
                : "Cours programmés aujourd&apos;hui"}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-none shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">
              Taux de Présence
            </CardTitle>
            <div className="p-2 bg-purple-100 rounded-full">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700">
              {attendanceRate}%
            </div>
            <p className="text-xs text-purple-600 mt-1">
              Taux de présence global
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Courses */}
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg">
          <CardTitle className="text-white flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Cours d&apos;Aujourd&apos;hui
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {todaysCourses.length === 0 ? (
            <div className="text-center py-8">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">
                Aucun cours programmé pour aujourd&apos;hui
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {todaysCourses.map((schedule) => {
                const course = studentCourses.find(
                  (c) => c.id === schedule.course_id.id
                );
                return (
                  <div
                    key={schedule.id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <BookText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {course?.name || "Cours sans nom"}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {formatTime(schedule.start_time)} -{" "}
                            {formatTime(schedule.end_time)}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            Salle {schedule.room}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        router.push(
                          `/student/attendance?courseId=${course?.id}`
                        )
                      }
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                    >
                      <ClipboardList className="h-4 w-4" />
                      Voir la Présence
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-lg">
          <CardTitle className="text-white">Actions Rapides</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <button
              onClick={() => router.push("/student/schedule")}
              className="p-6 text-left bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    Emploi du Temps
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Consulter votre emploi du temps hebdomadaire
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
              </div>
            </button>

            <button
              onClick={() => router.push("/student/attendance")}
              className="p-6 text-left bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    Historique des Présences
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Consulter votre historique de présence
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
              </div>
            </button>

            <button
              onClick={() => router.push("/student/courses")}
              className="p-6 text-left bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    Mes Cours
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Consulter la liste de vos cours
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
              </div>
            </button>

            <button
              onClick={() => router.push("/student/scan")}
              className="p-6 text-left bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    Scanner QR Code
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Scanner le QR code pour marquer votre présence
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
