import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  created_at: string;
}

export interface CreateUserData {
  name: string;
  email: string;
  role: string;
  password: string;
  fingerprint_id?: string;
}

export interface UserStats {
  total: number;
  students: number;
  teachers: number;
  admins: number;
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<UserStats>({
    total: 0,
    students: 0,
    teachers: 0,
    admins: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const { toast } = useToast();

  const calculateStats = (usersList: User[]) => {
    const newStats = {
      total: usersList.length,
      students: usersList.filter((user) => user.role === "student").length,
      teachers: usersList.filter((user) => user.role === "teacher").length,
      admins: usersList.filter((user) => user.role === "admin").length,
    };
    setStats(newStats);
  };

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch("/api/users", {
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
            : "Failed to fetch users"
        );
      }

      const data = await res.json();
      setUsers(data.users);
      calculateStats(data.users);
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

  const deleteUser = async (id: number, role: string) => {
    try {
      setIsLoading(true);

      const res = await fetch(`/api/users?id=${id}&role=${role}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to delete user");
      }

      // Update local state by removing the deleted user
      const updatedUsers = users.filter(
        (user) => !(user.id === id && user.role === role)
      );
      setUsers(updatedUsers);
      calculateStats(updatedUsers);

      toast({
        title: "Succès",
        description: "Utilisateur supprimé avec succès",
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to delete user";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const createUser = async (userData: CreateUserData) => {
    try {
      setIsLoading(true);

      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to create user");
      }

      // Update local state with the new user list
      await fetchUsers();

      toast({
        title: "Succès",
        description: "Utilisateur créé avec succès",
      });

      return data.user;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to create user";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated" && session?.user?.role === "admin") {
      fetchUsers();
    }
  }, [status, session]);

  return {
    users,
    stats,
    isLoading,
    error,
    fetchUsers,
    deleteUser,
    createUser,
  };
};
