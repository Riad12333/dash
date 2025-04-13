'use client';

import { FC, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

interface Course {
  id: string;
  name: string;
  schedule: string;
  room: string;
  professor: string;
  isActive: boolean;
}

const StudentCourses: FC = () => {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: 'INFO401',
      name: 'Intelligence Artificielle',
      schedule: 'Lundi 08:00 - 10:00',
      room: 'Salle A1',
      professor: 'YEDDOU FAROUK',
      isActive: true
    },
    {
      id: 'INFO402',
      name: 'Systèmes Distribués',
      schedule: 'Mardi 10:00 - 12:00',
      room: 'Salle B2',
      professor: 'GUENFAF YOUCEF',
      isActive: true
    },
    {
      id: 'INFO403',
      name: 'Intelligence Artificielle TD',
      schedule: 'Jeudi 14:00 - 16:00',
      room: 'Salle C3',
      professor: 'YEDDOU FAROUK',
      isActive: false
    }
  ];

  const handleCourseSelect = (course: Course) => {
    if (course.isActive) {
      router.push(`/student/attendance?courseId=${course.id}`);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Mes Cours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <Card
                key={course.id}
                className={`cursor-pointer transition-all ${
                  course.isActive
                    ? 'hover:border-blue-500 hover:bg-blue-50'
                    : 'opacity-50 cursor-not-allowed'
                }`}
                onClick={() => handleCourseSelect(course)}
              >
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{course.name}</h3>
                    {course.isActive ? (
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                        Actif
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                        Inactif
                      </span>
                    )}
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Horaire:</span> {course.schedule}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Salle:</span> {course.room}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Professeur:</span> {course.professor}
                    </p>
                  </div>
                  {course.isActive && (
                    <button
                      className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() => handleCourseSelect(course)}
                    >
                      Marquer ma présence
                    </button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentCourses; 