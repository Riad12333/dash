'use client';

import { FC, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { toast } from 'sonner';

interface Room {
  id: number;
  name: string;
  type: 'classroom' | 'lab' | 'amphitheater';
  capacity: number;
  building: string;
  floor: number;
  features: string[];
}

const initialRooms: Room[] = [
  {
    id: 1,
    name: 'Salle 1',
    type: 'classroom',
    capacity: 30,
    building: 'Bloc A',
    floor: 1,
    features: ['Projecteur', 'Tableau blanc'],
  },
  {
    id: 2,
    name: 'Labo Info 1',
    type: 'lab',
    capacity: 25,
    building: 'Bloc B',
    floor: 2,
    features: ['Ordinateurs', 'Climatisation', 'Projecteur'],
  },
  {
    id: 3,
    name: 'Amphi 1',
    type: 'amphitheater',
    capacity: 200,
    building: 'Bloc C',
    floor: 0,
    features: ['Système audio', 'Projecteur', 'Climatisation'],
  },
];

const RoomsPage: FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newRoom, setNewRoom] = useState<Partial<Room>>({
    type: 'classroom',
    features: [],
  });
  const [featureInput, setFeatureInput] = useState('');

  // Charger les salles depuis localStorage au démarrage
  useEffect(() => {
    const savedRooms = localStorage.getItem('rooms');
    if (savedRooms) {
      setRooms(JSON.parse(savedRooms));
    } else {
      setRooms(initialRooms);
      localStorage.setItem('rooms', JSON.stringify(initialRooms));
    }
  }, []);

  const handleAddRoom = () => {
    if (!newRoom.name || !newRoom.capacity || !newRoom.building || newRoom.floor === undefined) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const room: Room = {
      id: rooms.length + 1,
      name: newRoom.name,
      type: newRoom.type as 'classroom' | 'lab' | 'amphitheater',
      capacity: Number(newRoom.capacity),
      building: newRoom.building,
      floor: Number(newRoom.floor),
      features: newRoom.features || [],
    };

    const updatedRooms = [...rooms, room];
    setRooms(updatedRooms);
    // Sauvegarder dans localStorage
    localStorage.setItem('rooms', JSON.stringify(updatedRooms));
    
    setIsAddDialogOpen(false);
    setNewRoom({ type: 'classroom', features: [] });
    toast.success('Salle ajoutée avec succès');
  };

  const addFeature = () => {
    if (featureInput.trim() && newRoom.features) {
      setNewRoom({
        ...newRoom,
        features: [...newRoom.features, featureInput.trim()],
      });
      setFeatureInput('');
    }
  };

  const removeFeature = (index: number) => {
    if (newRoom.features) {
      const newFeatures = [...newRoom.features];
      newFeatures.splice(index, 1);
      setNewRoom({ ...newRoom, features: newFeatures });
    }
  };

  const getRoomTypeLabel = (type: string) => {
    switch (type) {
      case 'classroom':
        return 'Salle de cours';
      case 'lab':
        return 'Laboratoire';
      case 'amphitheater':
        return 'Amphithéâtre';
      default:
        return type;
    }
  };

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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Nom de la salle *</Label>
                  <Input
                    id="name"
                    value={newRoom.name || ''}
                    onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
                    placeholder="ex: Salle 101"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-gray-700">Type de salle *</Label>
                  <Select
                    value={newRoom.type}
                    onValueChange={(value) => setNewRoom({ ...newRoom, type: value as Room['type'] })}
                  >
                    <SelectTrigger className="border-gray-200 bg-white">
                      <SelectValue placeholder="Sélectionner un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="classroom">Salle de cours</SelectItem>
                      <SelectItem value="lab">Laboratoire</SelectItem>
                      <SelectItem value="amphitheater">Amphithéâtre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity" className="text-gray-700">Capacité *</Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={newRoom.capacity || ''}
                    onChange={(e) => setNewRoom({ ...newRoom, capacity: parseInt(e.target.value) })}
                    placeholder="ex: 30"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="building" className="text-gray-700">Bâtiment *</Label>
                  <Input
                    id="building"
                    value={newRoom.building || ''}
                    onChange={(e) => setNewRoom({ ...newRoom, building: e.target.value })}
                    placeholder="ex: Bloc A"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="floor" className="text-gray-700">Étage *</Label>
                  <Input
                    id="floor"
                    type="number"
                    value={newRoom.floor || ''}
                    onChange={(e) => setNewRoom({ ...newRoom, floor: parseInt(e.target.value) })}
                    placeholder="ex: 1"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="features" className="text-gray-700">Équipements</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="features"
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      placeholder="ex: Projecteur"
                      onKeyPress={(e) => e.key === 'Enter' && addFeature()}
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <Button type="button" onClick={addFeature} className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-200">
                      +
                    </Button>
                  </div>
                </div>
              </div>
              {newRoom.features && newRoom.features.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {newRoom.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                    >
                      {feature}
                      <button
                        onClick={() => removeFeature(index)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex justify-end space-x-2 pt-4 border-t bg-gray-50">
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddDialogOpen(false);
                  setNewRoom({ type: 'classroom', features: [] });
                }}
                className="bg-white hover:bg-gray-100"
              >
                Annuler
              </Button>
              <Button onClick={handleAddRoom} className="bg-blue-600 hover:bg-blue-700 text-white">
                Ajouter
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <Card key={room.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{room.name}</span>
                <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {getRoomTypeLabel(room.type)}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Capacité</p>
                    <p className="font-medium">{room.capacity} places</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bâtiment</p>
                    <p className="font-medium">{room.building}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Étage</p>
                    <p className="font-medium">{room.floor}</p>
                  </div>
                </div>
                {room.features.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Équipements</p>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage; 