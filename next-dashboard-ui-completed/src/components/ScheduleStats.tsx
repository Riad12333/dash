'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Schedule {
  id: string;
  type: 'student' | 'teacher';
  lastUpdated: string;
}

interface Stats {
  totalSchedules: number;
  studentSchedules: number;
  teacherSchedules: number;
  updatesThisWeek: number;
}

export function ScheduleStats() {
  const [stats, setStats] = useState<Stats>({
    totalSchedules: 0,
    studentSchedules: 0,
    teacherSchedules: 0,
    updatesThisWeek: 0
  });

  const fetchStats = async () => {
    try {
      // Récupérer les emplois du temps depuis le localStorage
      const schedulesData = localStorage.getItem('schedules');
      const schedules: Schedule[] = schedulesData ? JSON.parse(schedulesData) : [];

      // Calculer les statistiques
      const totalSchedules = schedules.length;
      const studentSchedules = schedules.filter((s: Schedule) => s.type === 'student').length;
      const teacherSchedules = schedules.filter((s: Schedule) => s.type === 'teacher').length;

      // Calculer les mises à jour de cette semaine
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const updatesThisWeek = schedules.filter((s: Schedule) => {
        const updateDate = new Date(s.lastUpdated);
        return updateDate >= oneWeekAgo;
      }).length;

      setStats({
        totalSchedules,
        studentSchedules,
        teacherSchedules,
        updatesThisWeek
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques:', error);
    }
  };

  useEffect(() => {
    // Charger les stats au montage
    fetchStats();

    // Mettre en place un écouteur d'événements pour le localStorage
    const handleStorageChange = () => {
      fetchStats();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Rafraîchir toutes les 5 secondes
    const interval = setInterval(fetchStats, 5000);

    // Nettoyer
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <div className="bg-blue-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-sm font-medium text-gray-500">Total EDT</p>
            <p className="text-3xl font-bold text-gray-900">{stats.totalSchedules}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <div className="bg-blue-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍🎓</span>
            </div>
            <p className="text-sm font-medium text-gray-500">EDT Étudiants</p>
            <p className="text-3xl font-bold text-blue-600">{stats.studentSchedules}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <div className="bg-purple-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍🏫</span>
            </div>
            <p className="text-sm font-medium text-gray-500">EDT Professeurs</p>
            <p className="text-3xl font-bold text-purple-600">{stats.teacherSchedules}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <div className="bg-green-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <p className="text-sm font-medium text-gray-500">Mises à jour</p>
            <p className="text-3xl font-bold text-green-600">{stats.updatesThisWeek}</p>
            <p className="text-xs text-gray-500 mt-1">Cette semaine</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 