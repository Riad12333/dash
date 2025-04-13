'use client';

import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TeacherDashboard: FC = () => {
  const stats = {
    students: {
      total: 2,
      active: 2,
      absent: 0,
      averageAttendance: 95,
    },
    courses: {
      total: 2,
      today: 2,
      thisWeek: 4,
      averageGrade: 15.5,
    },
    tasks: {
      assignments: 2,
      toGrade: 4,
      meetings: 1,
      officeHours: 2,
    },
    research: {
      projects: 2,
      publications: 3,
      students: 5,
      nextDeadline: '2024-04-15',
    }
  };

  const todayCourses = [
    {
      id: 1,
      name: 'Intelligence Artificielle (INFO401)',
      time: '08:00 - 10:00',
      room: '301',
      type: 'CM',
      students: 2,
      attendance: 100,
    },
    {
      id: 2,
      name: 'Systèmes Distribués (INFO402)',
      time: '10:15 - 12:15',
      room: '302',
      type: 'TP',
      students: 2,
      attendance: 100,
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      type: 'assignment',
      course: 'Intelligence Artificielle (INFO401)',
      task: 'Corriger TP1',
      deadline: '2024-03-25',
      count: 2,
    },
    {
      id: 2,
      type: 'meeting',
      course: 'Systèmes Distribués (INFO402)',
      task: 'Réunion de suivi',
      deadline: '2024-03-24',
      student: 'Madjid',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'grade',
      course: 'Systèmes Distribués (INFO402)',
      action: 'Notes publiées',
      details: 'TP2 - Moyenne: 15.5/20',
      date: '2024-03-20 10:30',
    },
    {
      id: 2,
      type: 'attendance',
      course: 'Intelligence Artificielle (INFO401)',
      action: 'Présence enregistrée',
      details: '2/2 étudiants présents',
      date: '2024-03-20 09:00',
    },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header avec statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-xl transition-all duration-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-blue-200 rounded-full flex items-center justify-center mb-3">
                👥
              </div>
              <p className="text-sm font-medium text-gray-600">Étudiants actifs</p>
              <p className="text-3xl font-bold text-blue-600">{stats.students.active}</p>
              <p className="text-sm text-blue-600">{stats.students.absent} absents</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 shadow-lg hover:shadow-xl transition-all duration-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-green-200 rounded-full flex items-center justify-center mb-3">
                📚
              </div>
              <p className="text-sm font-medium text-gray-600">Cours aujourd'hui</p>
              <p className="text-3xl font-bold text-green-600">{stats.courses.today}</p>
              <p className="text-sm text-green-600">{stats.courses.thisWeek} cette semaine</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg hover:shadow-xl transition-all duration-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-yellow-200 rounded-full flex items-center justify-center mb-3">
                📝
              </div>
              <p className="text-sm font-medium text-gray-600">Devoirs à corriger</p>
              <p className="text-3xl font-bold text-yellow-600">{stats.tasks.toGrade}</p>
              <p className="text-sm text-yellow-600">{stats.tasks.assignments} à venir</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg hover:shadow-xl transition-all duration-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-purple-200 rounded-full flex items-center justify-center mb-3">
                🎯
              </div>
              <p className="text-sm font-medium text-gray-600">Moyenne générale</p>
              <p className="text-3xl font-bold text-purple-600">{stats.courses.averageGrade}/20</p>
              <p className="text-sm text-purple-600">{stats.students.averageAttendance}% présence</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cours d'aujourd'hui et tâches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cours d'aujourd'hui */}
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
                        Salle {course.room} • {course.students} étudiants
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{course.time}</p>
                    <p className="text-sm text-green-600">{course.attendance}% présence</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tâches à venir */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Tâches à venir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                      task.type === 'assignment' ? 'bg-yellow-500' : 'bg-purple-500'
                    }`}>
                      {task.type === 'assignment' ? '📝' : '👥'}
                    </div>
                    <div>
                      <h3 className="font-medium">{task.task}</h3>
                      <p className="text-sm text-gray-500">
                        {task.course} • {task.type === 'assignment' ? `${task.count} copies` : task.student}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{task.deadline}</p>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      {task.type === 'assignment' ? 'Commencer' : 'Voir détails'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activité récente */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Activité récente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <div className="text-xl">
                  {activity.type === 'grade' ? '📊' : '📝'}
                </div>
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.course} - {activity.details}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions rapides */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="p-4 text-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-200">
              <span className="text-2xl mb-2 block">📱</span>
              QR Code présence
            </button>
            <button className="p-4 text-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-200">
              <span className="text-2xl mb-2 block">📊</span>
              Publier notes
            </button>
            <button className="p-4 text-center rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition-all duration-200">
              <span className="text-2xl mb-2 block">📝</span>
              Nouveau devoir
            </button>
            <button className="p-4 text-center rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all duration-200">
              <span className="text-2xl mb-2 block">📅</span>
              Planifier réunion
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboard;
