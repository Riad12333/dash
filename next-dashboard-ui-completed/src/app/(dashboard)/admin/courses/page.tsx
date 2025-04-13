'use client';

import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CourseManagement from '@/components/CourseManagement';
import { Button } from '@/components/ui/button';

const CoursesPage: FC = () => {
  return (
    <div className="space-y-6">
      

  

      {/* Statistiques des cours */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cours actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">24</div>
            <p className="text-gray-500">+3 ce mois-ci</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taux de présence moyen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">92%</div>
            <p className="text-gray-500">+5% ce mois-ci</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Salles utilisées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">8/10</div>
            <p className="text-gray-500">2 salles disponibles</p>
          </CardContent>
        </Card>
      </div>
        {/* Composant de gestion des cours */}
      <CourseManagement />
     
    </div>
  );
};

export default CoursesPage; 