"use client";

import { FC, useState } from "react";
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
import { useRouter } from "next/navigation";
import { useUsers, CreateUserData } from "@/hooks/useUsers";

const AddUserDialog: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { createUser, isLoading, fetchUsers } = useUsers();
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState<CreateUserData>({
    name: "",
    email: "",
    role: "",
    password: "",
    fingerprint_id: "",
  });

  const handleSubmit = async () => {
    try {
      // Basic validation
      if (
        !formData.name ||
        !formData.email ||
        !formData.role ||
        !formData.password
      ) {
        toast({
          title: "Erreur de validation",
          description: "Veuillez remplir tous les champs obligatoires",
          variant: "destructive",
        });
        return;
      }

      // Additional validation for fingerprint_id
      if (
        (formData.role === "student" || formData.role === "teacher") &&
        !formData.fingerprint_id
      ) {
        toast({
          title: "Erreur de validation",
          description:
            "L'ID d'empreinte digitale est requis pour les étudiants et les enseignants",
          variant: "destructive",
        });
        return;
      }

      await createUser(formData);

      // Close the dialog and reset form
      handleClose();

      // Force a hard refresh of the page
      window.location.reload();
    } catch (error) {
      // Error is already handled by createUser
      console.error("Error in form submission:", error);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData({
      name: "",
      email: "",
      role: "",
      password: "",
      fingerprint_id: "",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-200">
          <span className="mr-2">+</span>
          Ajouter un utilisateur
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader className="bg-white border-b pb-4">
          <DialogTitle>Ajouter un nouvel utilisateur</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 bg-white">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-gray-700">
              Nom complet
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="John Doe"
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="john@example.com"
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-gray-700">
              Mot de passe
            </Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="••••••••"
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2 relative">
            <Label htmlFor="role" className="text-gray-700">
              Rôle
            </Label>
            <Select
              value={formData.role}
              onValueChange={(value) =>
                setFormData({ ...formData, role: value })
              }
            >
              <SelectTrigger id="role" className="border-gray-200 bg-white">
                <SelectValue placeholder="Sélectionner un rôle" />
              </SelectTrigger>
              <SelectContent
                position="popper"
                sideOffset={5}
                className="z-[60] bg-white"
              >
                <SelectItem value="admin">Administrateur</SelectItem>
                <SelectItem value="teacher">Enseignant</SelectItem>
                <SelectItem value="student">Étudiant</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {(formData.role === "student" || formData.role === "teacher") && (
            <div className="grid gap-2">
              <Label htmlFor="fingerprint_id" className="text-gray-700">
                ID d&apos;empreinte digitale
              </Label>
              <Input
                id="fingerprint_id"
                value={formData.fingerprint_id}
                onChange={(e) =>
                  setFormData({ ...formData, fingerprint_id: e.target.value })
                }
                placeholder="12345"
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          )}
        </div>
        <div className="flex justify-end space-x-2 pt-4 border-t bg-gray-50">
          <Button
            variant="outline"
            onClick={handleClose}
            className="bg-white hover:bg-gray-100"
            disabled={isLoading}
          >
            Annuler
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Création..." : "Ajouter"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
