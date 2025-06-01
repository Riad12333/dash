"use client";

import { FC, useState, useEffect } from "react";
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
import { useSections } from "@/hooks/useSections";
import { useGroups } from "@/hooks/useGroups";

const AddUserDialog: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { createUser, isLoading, fetchUsers } = useUsers();
  const router = useRouter();
  const { sections, error, fetchSections } = useSections();
  const { toast } = useToast();
  const [formData, setFormData] = useState<CreateUserData>({
    name: "",
    email: "",
    role: "",
    password: "",
    section: "",
    group: "",
    faculty: "",
  });

  // Get groups for the selected section
  const { groups } = useGroups(
    formData.section ? parseInt(formData.section) : 0
  );

  // Reset group when section changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, group: "" }));
  }, [formData.section]);

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

      if (
        formData.role === "student" &&
        (!formData.section || !formData.group)
      ) {
        toast({
          title: "Erreur de validation",
          description: "section et le groupe sont requis pour les étudiants ",
          variant: "destructive",
        });
        return;
      }
      if (formData.role === "teacher" && !formData.faculty) {
        toast({
          title: "Erreur de validation",
          description: "La faculté est requise pour les enseignants",
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
      section: "",
      group: "",
      password: "",
      faculty: "",
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

          {formData.role === "student" && (
            <Select
              value={formData.section}
              onValueChange={(value) =>
                setFormData({ ...formData, section: value })
              }
            >
              <SelectTrigger id="role" className="border-gray-200 bg-white">
                <SelectValue placeholder="Sélectionner une section" />
              </SelectTrigger>
              <SelectContent
                position="popper"
                sideOffset={5}
                className="z-[60] bg-white"
              >
                {sections.map(
                  (section) =>
                    section && (
                      <SelectItem
                        key={section.id}
                        value={section.id.toString()}
                      >
                        {section.name}
                      </SelectItem>
                    )
                )}
              </SelectContent>
            </Select>
          )}
          {formData.role === "teacher" && (
            <div className="grid gap-2">
              <Label htmlFor="faculty" className="text-gray-700">
                Faculté
              </Label>
              <Select
                value={formData.faculty}
                onValueChange={(value) =>
                  setFormData({ ...formData, faculty: value })
                }
              >
                <SelectTrigger
                  id="faculty"
                  className="border-gray-200 bg-white"
                >
                  <SelectValue placeholder="Sélectionner une faculté" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  sideOffset={5}
                  className="z-[60] bg-white"
                >
                  <SelectItem value="FI">FI</SelectItem>
                  <SelectItem value="FSB">FSB</SelectItem>
                  <SelectItem value="FC">FC</SelectItem>
                  <SelectItem value="FE">FE</SelectItem>
                  <SelectItem value="FP">FP</SelectItem>
                  <SelectItem value="FM">FM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          {formData.role === "student" && (
            <div className="grid gap-2">
              <Label htmlFor="group" className="text-gray-700">
                Groupe
              </Label>
              <Select
                value={formData.group}
                onValueChange={(value) =>
                  setFormData({ ...formData, group: value })
                }
                disabled={!formData.section}
              >
                <SelectTrigger id="groupe" className="border-gray-200 bg-white">
                  <SelectValue placeholder="Sélectionner un groupe" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  sideOffset={5}
                  className="z-[60] bg-white"
                >
                  {groups.map((group) => (
                    <SelectItem key={group.id} value={group.id.toString()}>
                      {group.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
