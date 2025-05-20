"use client";

import { FC, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useRooms, Room } from "@/hooks/useRooms";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Switch } from "@/components/ui/switch";

interface RoomWithDetails extends Room {
  capacity: number;
  status: "available" | "unavailable";
}

const RoomsPage: FC = () => {
  const { rooms: apiRooms, isLoading, error, fetchRooms } = useRooms();
  const { toast } = useToast();
  const router = useRouter();
  const { status, data: session } = useSession();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newRoom, setNewRoom] = useState<Partial<RoomWithDetails>>({
    name: "",
    capacity: 0,
    status: "available",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (session?.user?.role !== "admin") {
      router.push("/");
    }
  }, [session, router]);

  const handleAddRoom = async () => {
    try {
      if (!newRoom.name || !newRoom.capacity) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires",
          variant: "destructive",
        });
        return;
      }

      if (newRoom.capacity <= 0) {
        toast({
          title: "Erreur",
          description: "La capacité doit être un nombre positif",
          variant: "destructive",
        });
        return;
      }

      setIsSubmitting(true);
      const res = await fetch("/api/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoom),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to add room");
      }

      setIsAddDialogOpen(false);
      setNewRoom({ name: "", capacity: 0, status: "available" });
      toast({
        title: "Succès",
        description: "Salle ajoutée avec succès",
      });
      fetchRooms();
    } catch (error) {
      toast({
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue lors de l'ajout de la salle",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestion des Salles</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-200">
              <span className="mr-2">+</span>
              Ajouter une salle
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] bg-white">
            <DialogHeader className="bg-white border-b pb-4">
              <DialogTitle>Ajouter une nouvelle salle</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4 bg-white">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Nom de la salle *
                </Label>
                <Input
                  id="name"
                  value={newRoom.name || ""}
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, name: e.target.value })
                  }
                  placeholder="ex: Salle 101"
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity" className="text-gray-700">
                  Capacité *
                </Label>
                <Input
                  id="capacity"
                  type="number"
                  min="1"
                  value={newRoom.capacity || ""}
                  onChange={(e) =>
                    setNewRoom({
                      ...newRoom,
                      capacity: parseInt(e.target.value) || 0,
                    })
                  }
                  placeholder="ex: 30"
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="status"
                  checked={newRoom.status === "available"}
                  onCheckedChange={(checked) =>
                    setNewRoom({
                      ...newRoom,
                      status: checked ? "available" : "unavailable",
                    })
                  }
                />
                <Label htmlFor="status" className="text-gray-700">
                  Salle disponible
                </Label>
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-4 border-t bg-gray-50">
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddDialogOpen(false);
                  setNewRoom({ name: "", capacity: 0, status: "available" });
                }}
                className="bg-white hover:bg-gray-100"
                disabled={isSubmitting}
              >
                Annuler
              </Button>
              <Button
                onClick={handleAddRoom}
                className="bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Ajout en cours...
                  </>
                ) : (
                  "Ajouter"
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apiRooms.map((room) => (
          <Card key={room.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{room.name}</span>
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    (room as RoomWithDetails).status === "available"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {(room as RoomWithDetails).status === "available"
                    ? "Disponible"
                    : "Non disponible"}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">ID</p>
                    <p className="font-medium">{room.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Capacité</p>
                    <p className="font-medium">
                      {(room as RoomWithDetails).capacity} places
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
