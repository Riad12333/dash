'use client';

import { FC, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Course {
  id: string;
  name: string;
  code: string;
  students: number;
  schedule: string;
  room: string;
  attendance: number;
}

const TeacherCourses: FC = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'all'>('current');

  const courses: Course[] = [
    {
      id: '1',
      name: 'Introduction à la Blockchain',
      code: 'INFO401',
      students: 45,
      schedule: 'Lundi 08:00-10:00',
      room: '301',
      attendance: 92,
    },
    {
      id: '2',
      name: 'IoT et Systèmes Embarqués',
      code: 'INFO402',
      students: 38,
      schedule: 'Mardi 10:15-12:15',
      room: '302',
      attendance: 88,
    },
    {
      id: '3',
      name: 'Intelligence Artificielle',
      code: 'INFO403',
      students: 50,
      schedule: 'Mercredi 14:00-16:00',
      room: '303',
      attendance: 95,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Total des cours</p>
              <p className="text-3xl font-bold text-gray-900">5</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Total des étudiants</p>
              <p className="text-3xl font-bold text-gray-900">133</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Moyenne de présence</p>
              <p className="text-3xl font-bold text-gray-900">91.7%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        <button
          className={`pb-4 px-4 ${
            activeTab === 'current'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('current')}
        >
          Cours actuels
        </button>
        <button
          className={`pb-4 px-4 ${
            activeTab === 'all'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('all')}
        >
          Tous les cours
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{course.name}</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{course.code}</p>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                  {course.students} étudiants
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Horaire</p>
                    <p className="font-medium">{course.schedule}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Salle</p>
                    <p className="font-medium">{course.room}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Taux de présence</p>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                      <div
                        style={{ width: `${course.attendance}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-blue-600 mt-1">
                      {course.attendance}%
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Gérer la présence
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Détails
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

     
    </div>
  );
};

export default TeacherCourses; 