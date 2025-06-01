import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export interface Group {
  id: number;
  name: string;
}

export const useGroups = (sectionId: number) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch(`/api/groups?section=${sectionId}`, {
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
            : "Failed to fetch groups"
        );
      }

      const data = await res.json();
      setGroups(data.groups);
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
      fetchGroups();
    }
  }, [status, sectionId]);

  return {
    groups,
    isLoading,
    error,
    fetchGroups,
  };
};
