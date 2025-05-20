import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export interface AttendanceRecord {
  id: number;
  timestamp: Date;
  status: string;
  student: {
    id: number;
    name: string;
    email: string;
    fingerprint_id: string;
  };
  course: {
    id: number;
    name: string;
    professor: {
      id: number;
      name: string;
      email: string;
    };
  };
  formattedDate: string;
}

export const useAttendance = () => {
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const fetchAttendance = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(`/api/attendance`, {
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
            : "Failed to fetch attendance records"
        );
      }

      const data = await res.json();
      setAttendance(data.attendance);
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
      fetchAttendance();
    }
  }, []);

  return {
    attendance,
    isLoading,
    error,
    fetchAttendance,
  };
};
