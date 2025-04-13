'use client';

import { FC, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AttendanceChart from '@/components/AttendanceChart';

interface AttendanceRecord {
  id: string;
  studentName: string;
  studentId: string;
  course: string;
  date: string;
  time: string;
  status: 'present' | 'absent' | 'late';
  verifiedBy: string;
  fingerprintVerified: boolean;
}

const AdminAttendance: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const courses = [
    { id: 'INFO401', name: 'Intelligence Artificielle' },
    { id: 'INFO402', name: 'Systèmes Distribués' },
    { id: 'INFO403', name: 'Intelligence Artificielle TD' },
  ];

  useEffect(() => {
    fetchAttendanceRecords();
  }, [selectedCourse, selectedDate]);

  const fetchAttendanceRecords = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `/api/attendance?courseId=${selectedCourse}&date=${selectedDate}`
      );
      const data = await response.json();
      setAttendanceRecords(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des présences:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredRecords = attendanceRecords.filter((record) => {
    const matchesSearch =
      record.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.studentId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const getStatusColor = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-700';
      case 'absent':
        return 'bg-red-100 text-red-700';
      case 'late':
        return 'bg-yellow-100 text-yellow-700';
    }
  };

  // Calculer les statistiques pour aujourd'hui
  const todayStats = {
    present: filteredRecords.filter(r => r.status === 'present').length,
    absent: filteredRecords.filter(r => r.status === 'absent').length,
    late: filteredRecords.filter(r => r.status === 'late').length,
  };

  const totalRecords = todayStats.present + todayStats.absent + todayStats.late;
  const presenceRate = totalRecords > 0 ? Math.round((todayStats.present / totalRecords) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Taux de présence</p>
              <p className="text-3xl font-bold text-green-600">{presenceRate}%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Présents aujourd'hui</p>
              <p className="text-3xl font-bold text-blue-600">{todayStats.present}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Vérifications d'empreintes</p>
              <p className="text-3xl font-bold text-purple-600">
                {filteredRecords.filter(r => r.fingerprintVerified).length}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Absents</p>
              <p className="text-3xl font-bold text-red-600">{todayStats.absent}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Rechercher un étudiant..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Tous les cours</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Exporter
        </button>
      </div>

      {/* Attendance Records */}
      <Card>
        <CardHeader>
          <CardTitle>Registre des présences</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-8">Chargement...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">ID</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                      Étudiant
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Cours</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Heure</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                      Empreinte vérifiée
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                      Vérifié par
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredRecords.map((record) => (
                    <tr key={record.id}>
                      <td className="px-6 py-4 text-sm text-gray-900">{record.studentId}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">{record.studentName}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{record.course}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{record.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{record.time}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                            record.status
                          )}`}
                        >
                          {record.status === 'present' ? 'Présent' : 
                           record.status === 'absent' ? 'Absent' : 'En retard'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          record.fingerprintVerified 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {record.fingerprintVerified ? 'Oui' : 'Non'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{record.verifiedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAttendance; 