import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export interface Section {
  id: number;
  name: string;
  department: string;
  year: number;
}

export const useSections = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const fetchSections = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch("/api/sections", {
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
            : "Failed to fetch sections"
        );
      }

      const data = await res.json();
      setSections(data.sections);
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
      fetchSections();
    }
  }, [status]);

  return {
    sections,
    isLoading,
    error,
    fetchSections,
  };
};
