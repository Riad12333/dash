'use client';

import React, { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TeacherSchedule: FC = () => {
  const scheduleInfo = {
    name: 'Professeurs - Département Info',
    department: 'Informatique',
    year: '2023-2024',
    semester: 'S2',
    lastUpdated: '2024-03-15',
    downloadUrl: '/schedules/profs-info.pdf',
  };

  const courses = [
    {
      name: 'Introduction à la Blockchain',
      code: 'INFO401',
      schedule: 'Lundi 08:00-10:00',
      room: '301',
    },
    {
      name: 'IoT et Systèmes Embarqués',
      code: 'INFO402',
      schedule: 'Mardi 10:15-12:15',
      room: '302',
    },
    {
      name: 'Intelligence Artificielle',
      code: 'INFO403',
      schedule: 'Mercredi 14:00-16:00',
      room: '303',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800">Mon emploi du temps</h2>
        <p className="text-gray-600 mt-2">
          {scheduleInfo.name} - {scheduleInfo.year}
        </p>
      </div>

      {/* Schedule Card */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Emploi du temps actuel</CardTitle>
              <p className="text-sm text-gray-500 mt-1">
                Dernière mise à jour : {scheduleInfo.lastUpdated}
              </p>
            </div>
            <a
              href={scheduleInfo.downloadUrl}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger PDF
            </a>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="aspect-[1.414/1] bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">📄</div>
                <div className="text-gray-500">
                  Cliquez sur "Télécharger PDF" pour voir votre emploi du temps complet
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick View */}
      <Card>
        <CardHeader>
          <CardTitle>Aperçu des cours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course.code}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="space-y-1 mb-3 md:mb-0">
                  <h3 className="font-medium">{course.name}</h3>
                  <p className="text-sm text-gray-500">{course.code}</p>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">🕒</span>
                    {course.schedule}
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">🚪</span>
                    Salle {course.room}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <Card>
        <CardHeader>
          <CardTitle>Informations importantes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="text-blue-600">ℹ️</div>
              <div>
                <p className="font-medium">Mises à jour régulières</p>
                <p className="text-gray-600">
                  L'emploi du temps est mis à jour chaque semaine. Vérifiez régulièrement les changements.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-yellow-600">⚠️</div>
              <div>
                <p className="font-medium">Changements de salles</p>
                <p className="text-gray-600">
                  En cas de changement de salle, vous serez notifié par email et dans l'application.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-green-600">📱</div>
              <div>
                <p className="font-medium">Version mobile</p>
                <p className="text-gray-600">
                  Téléchargez le PDF sur votre téléphone pour un accès hors-ligne.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherSchedule; 