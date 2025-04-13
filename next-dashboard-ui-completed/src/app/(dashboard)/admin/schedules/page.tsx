'use client';

import { FC, useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import { toast } from 'sonner';
import { writeFile } from 'fs/promises';
import path from 'path';
import { ScheduleStats } from '@/components/ScheduleStats';

interface Schedule {
  id: string;
  name: string;
  department: string;
  type: 'student' | 'teacher';
  year: string;
  semester: string;
  lastUpdated: string;
  status: 'active' | 'draft';
  downloadUrl: string;
}

const AdminSchedules: FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);
  const [newSchedule, setNewSchedule] = useState({
    name: '',
    department: '',
    type: '',
    year: '',
    semester: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Charger les emplois du temps au démarrage
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await fetch('/api/schedules');
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des emplois du temps');
        }
        const data = await response.json();
        setSchedules(data.schedules);
      } catch (error) {
        console.error('Erreur:', error);
        toast.error('Erreur lors du chargement des emplois du temps');
      }
    };

    fetchSchedules();
  }, []);

  const departments = ['Informatique', 'Mathématiques', 'Physique', 'Chimie'];

  const filteredSchedules = schedules.filter((schedule) => {
    const matchesSearch = schedule.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      selectedDepartment === 'all' || schedule.department === selectedDepartment;
    const matchesType = selectedType === 'all' || schedule.type === selectedType;
    return matchesSearch && matchesDepartment && matchesType;
  });

  const getStatusColor = (status: Schedule['status']) => {
    return status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
  };

  const getTypeColor = (type: Schedule['type']) => {
    return type === 'student' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      // Vérifier la taille du fichier (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Le fichier est trop volumineux (max 10MB)');
        return;
      }
      // Vérifier le type de fichier
      if (!file.type.match('image.*') && file.type !== 'application/pdf') {
        toast.error('Format de fichier non supporté');
        return;
      }
      setSelectedFile(file);
      toast.success('Fichier sélectionné avec succès');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      // Vérifier la taille du fichier (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Le fichier est trop volumineux (max 10MB)');
        return;
      }
      // Vérifier le type de fichier
      if (!file.type.match('image.*') && file.type !== 'application/pdf') {
        toast.error('Format de fichier non supporté');
        return;
      }
      setSelectedFile(file);
      toast.success('Fichier sélectionné avec succès');
    }
  };

  const handleAddSchedule = async () => {
    if (!newSchedule.name || !newSchedule.department || !newSchedule.type || !newSchedule.year || !newSchedule.semester) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (!selectedFile) {
      toast.error('Veuillez sélectionner un fichier');
      return;
    }

    try {
      setUploading(true);

      // Créer un ID unique pour le fichier
      const fileId = `EDT_${Date.now()}`;
      const fileExtension = selectedFile.name.split('.').pop();
      const fileName = `${fileId}.${fileExtension}`;
      
      // Créer l'objet schedule avec la date actuelle
      const schedule: Schedule = {
        id: fileId,
        name: newSchedule.name,
        department: newSchedule.department,
        type: newSchedule.type as 'student' | 'teacher',
        year: newSchedule.year,
        semester: newSchedule.semester,
        lastUpdated: new Date().toISOString().split('T')[0],
        status: 'active',
        downloadUrl: `/uploads/schedules/${fileName}`
      };

      // Sauvegarder le fichier
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('schedule', JSON.stringify(schedule));

        const response = await fetch('/api/schedules/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Erreur lors de l\'upload du fichier');
        }

        // Mettre à jour le state et le localStorage
        const updatedSchedules = [...schedules, schedule];
        setSchedules(updatedSchedules);
        localStorage.setItem('schedules', JSON.stringify(updatedSchedules));
        
        // Déclencher l'événement de mise à jour des statistiques
        window.dispatchEvent(new Event('schedulesUpdated'));
        
        // Réinitialiser le formulaire
        setIsAddDialogOpen(false);
        setNewSchedule({
          name: '',
          department: '',
          type: '',
          year: '',
          semester: ''
        });
        setSelectedFile(null);
        toast.success('Emploi du temps ajouté avec succès');
      } catch (error) {
        console.error('Erreur lors de l\'upload:', error);
        toast.error('Erreur lors de l\'upload du fichier');
      }
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de l\'ajout de l\'emploi du temps');
    } finally {
      setUploading(false);
    }
  };

  const handleEditSchedule = (schedule: Schedule) => {
    setSelectedSchedule(schedule);
    setNewSchedule({
      name: schedule.name,
      department: schedule.department,
      type: schedule.type,
      year: schedule.year,
      semester: schedule.semester,
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdateSchedule = async () => {
    if (!selectedSchedule) return;

    if (!newSchedule.name || !newSchedule.department || !newSchedule.type || !newSchedule.year || !newSchedule.semester) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    try {
      setUploading(true);
      
      const updatedSchedule = {
        ...selectedSchedule,
        name: newSchedule.name,
        department: newSchedule.department,
        type: newSchedule.type as 'student' | 'teacher',
        year: newSchedule.year,
        semester: newSchedule.semester,
        lastUpdated: new Date().toISOString().split('T')[0],
      };

      if (selectedFile) {
        const fileUrl = URL.createObjectURL(selectedFile);
        updatedSchedule.downloadUrl = fileUrl;
      }

      const updatedSchedules = schedules.map(s => 
        s.id === selectedSchedule.id ? updatedSchedule : s
      );

      setSchedules(updatedSchedules);
      localStorage.setItem('schedules', JSON.stringify(updatedSchedules));
      
      // Déclencher l'événement de mise à jour
      window.dispatchEvent(new Event('schedulesUpdated'));
      
      setIsEditDialogOpen(false);
      setSelectedSchedule(null);
      setSelectedFile(null);
      toast.success('Emploi du temps mis à jour avec succès');
    } catch (error) {
      toast.error('Erreur lors de la mise à jour');
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteSchedule = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet emploi du temps ?')) {
      const updatedSchedules = schedules.filter(s => s.id !== id);
      setSchedules(updatedSchedules);
      localStorage.setItem('schedules', JSON.stringify(updatedSchedules));
      
      // Déclencher l'événement de mise à jour
      window.dispatchEvent(new Event('schedulesUpdated'));
      
      toast.success('Emploi du temps supprimé avec succès');
    }
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Emplois du temps</h2>
      </div>
      <ScheduleStats />
      <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
        

        {/* Barre de recherche et filtres avec nouveau design */}
        <div className="bg-white p-4 rounded-xl shadow-md space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
          <div className="flex-1">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Rechercher un emploi du temps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
              />
            </div>
          </div>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
          >
            <option value="all">Tous les départements</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
          >
            <option value="all">Tous les types</option>
            <option value="student">Étudiants</option>
            <option value="teacher">Professeurs</option>
          </select>
          <Button 
            onClick={() => setIsAddDialogOpen(true)}
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <span>➕</span> Ajouter EDT
          </Button>
        </div>

        {/* Grille des emplois du temps avec nouveau design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchedules.map((schedule) => (
            <Card key={schedule.id} className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="border-b bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-800">{schedule.name}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                      <span>🏢</span> {schedule.department}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      schedule.type === 'student' 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                      : 'bg-purple-100 text-purple-700 border border-purple-200'
                    }`}
                  >
                    {schedule.type === 'student' ? '👨‍🎓 Étudiants' : '👨‍🏫 Professeurs'}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Année</p>
                    <p className="font-medium text-gray-800">{schedule.year}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Semestre</p>
                    <p className="font-medium text-gray-800">{schedule.semester}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Dernière mise à jour</p>
                  <p className="font-medium text-gray-800 flex items-center gap-2">
                    <span>📅</span> {schedule.lastUpdated}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => setSelectedImage(schedule.downloadUrl)}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300"
                    >
                      👁️ Voir
                    </Button>
                    <Button
                      onClick={() => window.open(schedule.downloadUrl, '_blank')}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300"
                    >
                      ⬇️ Télécharger
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => handleEditSchedule(schedule)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                    >
                      ✏️
                    </Button>
                    <Button
                      onClick={() => handleDeleteSchedule(schedule.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                    >
                      🗑️
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative bg-white rounded-lg shadow-xl w-[900px] h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800">Emploi du temps</h3>
                <div className="flex items-center gap-4">
                  <a 
                    href={selectedImage}
                    download="emploi-du-temps.png"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-green-700 bg-green-50 rounded-md hover:bg-green-100 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Télécharger
                  </a>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-auto p-6 bg-gray-50">
                <div className="flex items-center justify-center h-full">
                  <img
                    src={selectedImage}
                    alt="Emploi du temps"
                    className="max-w-full max-h-full object-contain bg-white shadow-lg rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal d'ajout d'EDT */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white p-0 rounded-xl">
            <DialogHeader className="sticky top-0 z-10 bg-white border-b pb-4 px-6 pt-6">
              <DialogTitle className="text-xl font-semibold">Ajouter un nouvel emploi du temps</DialogTitle>
            </DialogHeader>
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nom de l'emploi du temps *
                    </Label>
                    <Input
                      id="name"
                      value={newSchedule.name}
                      onChange={(e) => setNewSchedule({ ...newSchedule, name: e.target.value })}
                      placeholder="ex: Licence Informatique - 2ème année"
                      className="mt-1 block w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                      Département *
                    </Label>
                    <Select
                      value={newSchedule.department}
                      onValueChange={(value) => setNewSchedule({ ...newSchedule, department: value })}
                    >
                      <SelectTrigger className="mt-1 block w-full border-gray-200 bg-white rounded-lg shadow-sm">
                        <SelectValue placeholder="Sélectionner un département" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="type" className="text-sm font-medium text-gray-700">
                      Type *
                    </Label>
                    <Select
                      value={newSchedule.type}
                      onValueChange={(value) => setNewSchedule({ ...newSchedule, type: value })}
                    >
                      <SelectTrigger className="mt-1 block w-full border-gray-200 bg-white rounded-lg shadow-sm">
                        <SelectValue placeholder="Sélectionner un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">👨‍🎓 Étudiants</SelectItem>
                        <SelectItem value="teacher">👨‍🏫 Professeurs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="year" className="text-sm font-medium text-gray-700">
                      Année universitaire *
                    </Label>
                    <Input
                      id="year"
                      value={newSchedule.year}
                      onChange={(e) => setNewSchedule({ ...newSchedule, year: e.target.value })}
                      placeholder="ex: 2024-2025"
                      className="mt-1 block w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="semester" className="text-sm font-medium text-gray-700">
                      Semestre *
                    </Label>
                    <Select
                      value={newSchedule.semester}
                      onValueChange={(value) => setNewSchedule({ ...newSchedule, semester: value })}
                    >
                      <SelectTrigger className="mt-1 block w-full border-gray-200 bg-white rounded-lg shadow-sm">
                        <SelectValue placeholder="Sélectionner un semestre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="S1">S1</SelectItem>
                        <SelectItem value="S2">S2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Zone de dépôt de fichier */}
                <div className="md:col-span-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Image de l'emploi du temps *
                  </Label>
                  <div
                    className={`mt-2 border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                      isDragging
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      accept="image/*,.pdf"
                      className="hidden"
                    />
                    <div className="space-y-4">
                      <div className="text-4xl">📄</div>
                      <div>
                        <p className="text-gray-600">
                          {isDragging
                            ? 'Déposez votre fichier ici'
                            : 'Glissez-déposez une image ou un PDF, ou cliquez pour parcourir'}
                        </p>
                        {selectedFile && (
                          <p className="mt-2 text-sm text-blue-600">
                            Fichier sélectionné : {selectedFile.name}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        Formats acceptés : Images (PNG, JPG) ou PDF. Taille maximale : 10 MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 z-10 bg-gray-50 px-6 py-4 border-t mt-4">
              <div className="flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                  className="px-4 py-2 bg-white hover:bg-gray-100 border border-gray-200 rounded-lg"
                >
                  Annuler
                </Button>
                <Button
                  onClick={handleAddSchedule}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  disabled={uploading}
                >
                  {uploading ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">🔄</span> En cours...
                    </span>
                  ) : (
                    'Ajouter'
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Modal d'édition d'EDT */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white p-0 rounded-xl">
            <DialogHeader className="sticky top-0 z-10 bg-white border-b pb-4 px-6 pt-6">
              <DialogTitle className="text-xl font-semibold">Modifier l'emploi du temps</DialogTitle>
            </DialogHeader>
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="edit-name" className="text-sm font-medium text-gray-700">
                      Nom de l'emploi du temps *
                    </Label>
                    <Input
                      id="edit-name"
                      value={newSchedule.name}
                      onChange={(e) => setNewSchedule({ ...newSchedule, name: e.target.value })}
                      placeholder="ex: Licence Informatique - 2ème année"
                      className="mt-1 block w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="edit-department" className="text-sm font-medium text-gray-700">
                      Département *
                    </Label>
                    <Select
                      value={newSchedule.department}
                      onValueChange={(value) => setNewSchedule({ ...newSchedule, department: value })}
                    >
                      <SelectTrigger className="mt-1 block w-full border-gray-200 bg-white rounded-lg shadow-sm">
                        <SelectValue placeholder="Sélectionner un département" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="edit-type" className="text-sm font-medium text-gray-700">
                      Type *
                    </Label>
                    <Select
                      value={newSchedule.type}
                      onValueChange={(value) => setNewSchedule({ ...newSchedule, type: value })}
                    >
                      <SelectTrigger className="mt-1 block w-full border-gray-200 bg-white rounded-lg shadow-sm">
                        <SelectValue placeholder="Sélectionner un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">👨‍🎓 Étudiants</SelectItem>
                        <SelectItem value="teacher">👨‍🏫 Professeurs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="edit-year" className="text-sm font-medium text-gray-700">
                      Année universitaire *
                    </Label>
                    <Input
                      id="edit-year"
                      value={newSchedule.year}
                      onChange={(e) => setNewSchedule({ ...newSchedule, year: e.target.value })}
                      placeholder="ex: 2024-2025"
                      className="mt-1 block w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="edit-semester" className="text-sm font-medium text-gray-700">
                      Semestre *
                    </Label>
                    <Select
                      value={newSchedule.semester}
                      onValueChange={(value) => setNewSchedule({ ...newSchedule, semester: value })}
                    >
                      <SelectTrigger className="mt-1 block w-full border-gray-200 bg-white rounded-lg shadow-sm">
                        <SelectValue placeholder="Sélectionner un semestre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="S1">S1</SelectItem>
                        <SelectItem value="S2">S2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Zone de dépôt de fichier */}
                <div className="md:col-span-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Image de l'emploi du temps {selectedSchedule?.downloadUrl ? '(optionnel)' : '*'}
                  </Label>
                  <div
                    className={`mt-2 border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                      isDragging
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      accept="image/*,.pdf"
                      className="hidden"
                    />
                    <div className="space-y-4">
                      <div className="text-4xl">📄</div>
                      <div>
                        <p className="text-gray-600">
                          {isDragging
                            ? 'Déposez votre fichier ici'
                            : selectedSchedule?.downloadUrl
                            ? 'Glissez-déposez une nouvelle image ou un PDF pour remplacer l\'existant'
                            : 'Glissez-déposez une image ou un PDF, ou cliquez pour parcourir'}
                        </p>
                        {selectedFile && (
                          <p className="mt-2 text-sm text-blue-600">
                            Nouveau fichier sélectionné : {selectedFile.name}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        Formats acceptés : Images (PNG, JPG) ou PDF. Taille maximale : 10 MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 z-10 bg-gray-50 px-6 py-4 border-t mt-4">
              <div className="flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={() => setIsEditDialogOpen(false)}
                  className="px-4 py-2 bg-white hover:bg-gray-100 border border-gray-200 rounded-lg"
                >
                  Annuler
                </Button>
                <Button
                  onClick={handleUpdateSchedule}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  disabled={uploading}
                >
                  {uploading ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">🔄</span> En cours...
                    </span>
                  ) : (
                    'Mettre à jour'
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminSchedules; 