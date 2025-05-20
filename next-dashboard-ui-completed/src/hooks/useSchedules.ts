import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export interface Schedule {
  id: number;
  course_id: number;
  day: string;
  start_time: string;
  end_time: string;
  room: string;
  professor_id?: number;
  section_id?: number;
}

export const useSchedules = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const fetchSchedules = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch("/api/schedules", {
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
            : "Failed to fetch schedules"
        );
      }

      const data = await res.json();
      setSchedules(data.schedules);
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
      fetchSchedules();
    }
  }, [status]);

  return {
    schedules,
    isLoading,
    error,
    fetchSchedules,
  };
};
