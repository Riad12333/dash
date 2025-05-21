import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export interface Course {
  id: number;
  name: string;
  professor_id: number;
  section_id: number;
  professor?: {
    id: number;
    name: string;
    department: string;
  };
  section?: {
    id: number;
    name: string;
    year: number;
  };
  totalSessions: number;
  attendanceRate: number;
}

export interface CourseStats {
  total: number;
  activeCourses: number;
  averageAttendance: number;
}

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [stats, setStats] = useState<CourseStats>({
    total: 0,
    activeCourses: 0,
    averageAttendance: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const calculateStats = (coursesList: Course[]) => {
    const total = coursesList.length;
    const activeCourses = coursesList.filter(
      (course) => course.totalSessions > 0
    ).length;
    const averageAttendance =
      coursesList.reduce((sum, course) => sum + course.attendanceRate, 0) /
      (total || 1);

    setStats({
      total,
      activeCourses,
      averageAttendance: Math.round(averageAttendance),
    });
  };

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch("/api/courses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(
          res.status === 401
            ? "Authentication required"
            : res.status === 403
            ? "Access denied"
            : "Failed to fetch courses"
        );
      }

      const data = await res.json();
      setCourses(data.courses);
      calculateStats(data.courses);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchCourses();
    }
  }, [status]);

  return {
    courses,
    stats,
    isLoading,
    error,
    fetchCourses,
  };
};
