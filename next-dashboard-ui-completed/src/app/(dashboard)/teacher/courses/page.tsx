"use client";

import { FC, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCourses } from "@/hooks/useCourses";
import { Loader2 } from "lucide-react";

const TeacherCourses: FC = () => {
  const [activeTab, setActiveTab] = useState<"current" | "all">("current");
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/sign-in");
    },
  });
  const { courses, isLoading, error, stats } = useCourses();

  if (status === "loading" || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 text-red-800 p-4 rounded-md">{error}</div>
      </div>
    );
  }

  const handleManageAttendance = (courseId: number) => {
    router.push(`/teacher/attendance?courseId=${courseId}`);
  };

  const handleViewDetails = (courseId: number) => {
    router.push(`/teacher/courses/${courseId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">
                Total des cours
              </p>
              <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Cours actifs</p>
              <p className="text-3xl font-bold text-gray-900">
                {stats.activeCourses}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">
                Moyenne de présence
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {stats.averageAttendance}%
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        <button
          className={`pb-4 px-4 ${
            activeTab === "current"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("current")}
        >
          Cours actuels
        </button>
        <button
          className={`pb-4 px-4 ${
            activeTab === "all"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("all")}
        >
          Tous les cours
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{course.name}</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    Section: {course.section?.name}
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                  {course.totalSessions} sessions
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Professeur</p>
                    <p className="font-medium">{course.professor?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Année</p>
                    <p className="font-medium">{course.section?.year}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Taux de présence</p>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                      <div
                        style={{ width: `${course.attendanceRate}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-blue-600 mt-1">
                      {course.attendanceRate}%
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleManageAttendance(course.id)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Gérer la présence
                  </button>
                  <button
                    onClick={() => handleViewDetails(course.id)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Détails
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherCourses;
