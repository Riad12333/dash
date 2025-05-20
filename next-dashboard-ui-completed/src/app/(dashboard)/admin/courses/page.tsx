"use client";

import { FC, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { useCourses } from "@/hooks/useCourses";
import CourseManagement from "@/components/CourseManagement";

const CoursesPage: FC = () => {
  const { courses, isLoading, error, stats } = useCourses();
  const router = useRouter();
  const { status, data: session } = useSession();

  useEffect(() => {
    if (session?.user?.role !== "admin") {
      router.push("/");
    }
  }, [session, router]);

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

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">
                Total des cours
              </p>
              <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Cours actifs</p>
              <p className="text-3xl font-bold text-green-600">
                {stats.activeCourses}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">
                Taux de présence moyen
              </p>
              <p className="text-3xl font-bold text-purple-600">
                {stats.averageAttendance}%
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Management Component */}
      <CourseManagement
        courses={courses}
        isLoading={isLoading}
        error={error}
        stats={stats}
      />
    </div>
  );
};

export default CoursesPage;
