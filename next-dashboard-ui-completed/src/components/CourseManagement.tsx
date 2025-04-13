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
import { toast } from 'sonner';

interface Course {
  id: string;
  name: string;
  teacher: string;
  schedule: string;
  room: string;
  students: number;
}

const initialCourses: Course[] = [
  {
    id: 'INFO401',
    name: 'Intelligence Artificielle',
    teacher: 'Dr. YEDDOU FAROUK',
    schedule: 'Lundi 08:00-10:00',
    room: 'Salle 1',
    students: 35,
  },
  {
    id: 'INFO402',
    name: 'Systèmes Distribués',
    teacher: 'Dr. GUENFAF YOUCEF',
    schedule: 'Mardi 10:00-12:00',
    room: 'Labo Info 1',
    students: 28,
  },
  {
    id: 'INFO403',
    name: 'Intelligence Artificielle TD',
    teacher: 'Dr. YEDDOU FAROUK',
    schedule: 'Mercredi 14:00-16:00',
    room: 'Salle 2',
    students: 20,
  },
];

const CourseManagement: FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newCourse, setNewCourse] = useState<Partial<Course>>({});

  // Charger les cours depuis localStorage au démarrage
  useEffect(() => {
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    } else {
      setCourses(initialCourses);
      localStorage.setItem('courses', JSON.stringify(initialCourses));
    }
  }, []);

  const handleAddCourse = () => {
    if (!newCourse.id || !newCourse.name || !newCourse.teacher || !newCourse.schedule || !newCourse.room) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const course: Course = {
      id: newCourse.id,
      name: newCourse.name,
      teacher: newCourse.teacher,
      schedule: newCourse.schedule,
      room: newCourse.room,
      students: newCourse.students || 0,
    };

    const updatedCourses = [...courses, course];
    setCourses(updatedCourses);
    // Sauvegarder dans localStorage
    localStorage.setItem('courses', JSON.stringify(updatedCourses));

    setIsAddDialogOpen(false);
    setNewCourse({});
    toast.success('Cours ajouté avec succès');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Liste des Cours</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-200">
              <span className="mr-2">+</span>
              Ajouter un cours
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] bg-white">
            <DialogHeader className="bg-white border-b pb-4">
              <DialogTitle>Ajouter un nouveau cours</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4 bg-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="courseId" className="text-gray-700">ID du cours *</Label>
                  <Input
                    id="courseId"
                    value={newCourse.id || ''}
                    onChange={(e) => setNewCourse({ ...newCourse, id: e.target.value })}
                    placeholder="ex: INFO401"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Nom du cours *</Label>
                  <Input
                    id="name"
                    value={newCourse.name || ''}
                    onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                    placeholder="ex: Intelligence Artificielle"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teacher" className="text-gray-700">Enseignant *</Label>
                  <Input
                    id="teacher"
                    value={newCourse.teacher || ''}
                    onChange={(e) => setNewCourse({ ...newCourse, teacher: e.target.value })}
                    placeholder="ex: Dr. YEDDOU FAROUK"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schedule" className="text-gray-700">Horaire *</Label>
                  <Input
                    id="schedule"
                    value={newCourse.schedule || ''}
                    onChange={(e) => setNewCourse({ ...newCourse, schedule: e.target.value })}
                    placeholder="ex: Lundi 08:00-10:00"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="room" className="text-gray-700">Salle *</Label>
                  <Input
                    id="room"
                    value={newCourse.room || ''}
                    onChange={(e) => setNewCourse({ ...newCourse, room: e.target.value })}
                    placeholder="ex: Salle 1"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="students" className="text-gray-700">Nombre d'étudiants</Label>
                  <Input
                    id="students"
                    type="number"
                    value={newCourse.students || ''}
                    onChange={(e) => setNewCourse({ ...newCourse, students: parseInt(e.target.value) })}
                    placeholder="ex: 30"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-4 border-t bg-gray-50">
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddDialogOpen(false);
                  setNewCourse({});
                }}
                className="bg-white hover:bg-gray-100"
              >
                Annuler
              </Button>
              <Button onClick={handleAddCourse} className="bg-blue-600 hover:bg-blue-700 text-white">
                Ajouter
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{course.name}</span>
                <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {course.id}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Enseignant</p>
                    <p className="font-medium">{course.teacher}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Horaire</p>
                    <p className="font-medium">{course.schedule}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Salle</p>
                    <p className="font-medium">{course.room}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Étudiants</p>
                    <p className="font-medium">{course.students}</p>
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

export default CourseManagement; 