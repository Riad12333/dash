'use client';

import { FC } from 'react';
import StatsCards from '@/components/StatsCards';
import AttendanceChart from '@/components/AttendanceChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CourseSchedule from '@/components/CourseSchedule';

const StudentDashboard: FC = () => {
  const stats = [
    {
      label: 'Taux de présence',
      value: '95%',
      change: 2.5,
      icon: '📊',
      color: 'green' as const,
    },
    {
      label: 'Moyenne générale',
      value: '15.5/20',
      change: 0.5,
      icon: '📈',
      color: 'blue' as const,
    },
    {
      label: 'Devoirs à rendre',
      value: '3',
      icon: '📝',
      color: 'yellow' as const,
    },
    {
      label: 'Examens à venir',
      value: '2',
      icon: '📚',
      color: 'red' as const,
    },
  ];

  const attendanceData = [
    { date: 'Lun', present: 1, absent: 0, late: 0 },
    { date: 'Mar', present: 1, absent: 0, late: 0 },
    { date: 'Mer', present: 1, absent: 0, late: 0 },
    { date: 'Jeu', present: 0, absent: 1, late: 0 },
    { date: 'Ven', present: 1, absent: 0, late: 0 },
  ];

  const todayCourses = [
    {
      id: '1',
      name: 'Intelligence Artificielle (INFO401)',
      professor: 'Dr. YEDDOU FAROUK',
      room: '301',
      day: 'Lundi',
      startTime: '08:00',
      endTime: '10:00',
      type: 'CM',
    },
    {
      id: '2',
      name: 'Systèmes Distribués (INFO402)',
      professor: 'Dr. GUENFAF YOUCEF',
      room: '302',
      day: 'Lundi',
      startTime: '10:15',
      endTime: '12:15',
      type: 'TP',
    },
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      course: 'Intelligence Artificielle (INFO401)',
      type: 'Projet',
      deadline: '2024-03-25',
      status: 'En cours',
    },
    {
      id: 2,
      course: 'Systèmes Distribués (INFO402)',
      type: 'TP',
      deadline: '2024-03-28',
      status: 'À faire',
    },
  ];

  const recentGrades = [
    {
      id: 1,
      course: 'Intelligence Artificielle (INFO401)',
      type: 'TP1',
      grade: 16,
      date: '2024-03-15',
    },
    {
      id: 2,
      course: 'Systèmes Distribués (INFO402)',
      type: 'Contrôle',
      grade: 15,
      date: '2024-03-10',
    },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Stats Cards */}
      <StatsCards stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Chart */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Présences de la semaine</CardTitle>
          </CardHeader>
          <CardContent>
            <AttendanceChart data={attendanceData} title="Présences de la semaine" />
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Cours d'aujourd'hui</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                      course.type === 'CM' ? 'bg-blue-500' : 'bg-green-500'
                    }`}>
                      {course.type === 'CM' ? '📚' : '💻'}
                    </div>
                    <div>
                      <h3 className="font-medium">{course.name}</h3>
                      <p className="text-sm text-gray-500">
                        {course.professor} • Salle {course.room}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{course.startTime} - {course.endTime}</p>
                    <p className="text-sm text-gray-500">{course.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Deadlines */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Échéances à venir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <div
                  key={deadline.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <h3 className="font-medium">{deadline.course}</h3>
                    <p className="text-sm text-gray-500">
                      {deadline.type} • Date limite: {deadline.deadline}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    deadline.status === 'En cours'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {deadline.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Notes récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentGrades.map((grade) => (
                <div
                  key={grade.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <h3 className="font-medium">{grade.course}</h3>
                    <p className="text-sm text-gray-500">
                      {grade.type} • {grade.date}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {grade.grade}/20
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="p-4 text-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-200">
              <span className="text-2xl mb-2 block">📱</span>
              Scanner QR Code
            </button>
            <button className="p-4 text-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-200">
              <span className="text-2xl mb-2 block">📊</span>
              Voir mes statistiques
            </button>
            <button className="p-4 text-center rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all duration-200">
              <span className="text-2xl mb-2 block">📅</span>
              Emploi du temps
            </button>
            <button className="p-4 text-center rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition-all duration-200">
              <span className="text-2xl mb-2 block">📄</span>
              Documents
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
