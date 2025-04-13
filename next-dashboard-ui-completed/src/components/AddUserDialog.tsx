'use client';

import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useUsersStore } from '@/store/useUsersStore';
import { toast } from 'sonner';
import { useNotificationsStore } from '@/store/useNotificationsStore';

const AddUserDialog: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
  });
  const [generatedCredentials, setGeneratedCredentials] = useState<{ username: string; password: string } | null>(null);

  const addUser = useUsersStore((state) => state.addUser);
  const addNotification = useNotificationsStore((state) => state.addNotification);

  const generateUsername = (fullName: string) => {
    // Prendre le premier mot du nom en minuscules
    return fullName
      .split(' ')[0]
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
      .toLowerCase()
      .trim();
  };

  const generatePassword = (role: string) => {
    switch (role) {
      case 'student':
        return 'etudiant123';
      case 'teacher':
        return 'prof123';
      case 'admin':
        return 'admin123';
      default:
        return 'user123';
    }
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.role) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    const username = generateUsername(formData.fullName);
    const password = generatePassword(formData.role);

    // Vérifier si l'utilisateur existe déjà
    const users = useUsersStore.getState().users;
    if (users.some(u => u.username === username)) {
      toast.error('Un utilisateur avec ce nom existe déjà');
      return;
    }

    const newUser = {
      fullName: formData.fullName.toUpperCase(), // Mettre le nom en majuscules comme dans les données initiales
      username,
      email: formData.email,
      role: formData.role as 'admin' | 'teacher' | 'student',
      password,
      lastLogin: new Date().toISOString(),
    };

    addUser(newUser);
    setGeneratedCredentials({ username, password });
    toast.success('Utilisateur ajouté avec succès');
    
    // Ajouter une notification système
    addNotification({
      type: 'system',
      message: `Nouveau compte créé pour ${formData.fullName}`,
      user: 'Système',
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    setFormData({ fullName: '', email: '', role: '' });
    setGeneratedCredentials(null);
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
            <Label htmlFor="fullName" className="text-gray-700">Nom complet</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="John Doe"
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role" className="text-gray-700">Rôle</Label>
            <Select
              value={formData.role}
              onValueChange={(value) => setFormData({ ...formData, role: value })}
            >
              <SelectTrigger className="border-gray-200 bg-white">
                <SelectValue placeholder="Sélectionner un rôle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrateur</SelectItem>
                <SelectItem value="teacher">Enseignant</SelectItem>
                <SelectItem value="student">Étudiant</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {generatedCredentials && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-medium text-blue-800 mb-2">Identifiants générés :</h3>
              <div className="space-y-2 text-sm text-blue-700">
                <p>Nom d'utilisateur : <span className="font-mono">{generatedCredentials.username}</span></p>
                <p>Mot de passe : <span className="font-mono">{generatedCredentials.password}</span></p>
              </div>
              <p className="mt-2 text-xs text-blue-600">Veuillez noter ces informations, elles ne seront plus affichées après la fermeture.</p>
            </div>
          )}
        </div>
        <div className="flex justify-end space-x-2 pt-4 border-t bg-gray-50">
          <Button
            variant="outline"
            onClick={handleClose}
            className="bg-white hover:bg-gray-100"
          >
            {generatedCredentials ? 'Fermer' : 'Annuler'}
          </Button>
          {!generatedCredentials && (
            <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white">
              Ajouter
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog; 