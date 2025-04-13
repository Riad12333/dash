'use client';

import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudentSchedule: FC = () => {
  const scheduleInfo = {
    name: 'Master Informatique - S2',
    year: '2023-2024',
    semester: 'S2',
    lastUpdated: '2024-03-15',
    downloadUrl: '/schedules/master-info-s2.pdf',
  };

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
          <div className="aspect-[1.414/1] bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">📄</div>
              <div className="text-gray-500">
                Cliquez sur "Télécharger PDF" pour voir votre emploi du temps
              </div>
            </div>
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
                <p className="font-medium">Changements de dernière minute</p>
                <p className="text-gray-600">
                  Des notifications vous seront envoyées en cas de modification imprévue.
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

export default StudentSchedule; 