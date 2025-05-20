import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export interface Professor {
  id: number;
  name: string;
  email: string;
  department: string;
}

export const useProfessors = () => {
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const fetchProfessors = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch("/api/professors", {
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
            : "Failed to fetch professors"
        );
      }

      const data = await res.json();
      setProfessors(data.professors);
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
      fetchProfessors();
    }
  }, [status]);

  return {
    professors,
    isLoading,
    error,
    fetchProfessors,
  };
};
