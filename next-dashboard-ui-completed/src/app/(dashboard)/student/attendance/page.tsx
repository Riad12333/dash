'use client';

import { FC, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter, useSearchParams } from 'next/navigation';

interface Course {
  id: string;
  name: string;
  schedule: string;
  room: string;
  professor: string;
}

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

const StudentAttendance: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');

  // Données de l'étudiant (à remplacer par les données réelles de l'utilisateur connecté)
  const currentStudent = {
    id: 'STU001',
    name: 'OULDGOUGAM MADJID'
  };

  const courses: Course[] = [
    {
      id: 'INFO401',
      name: 'Intelligence Artificielle',
      schedule: 'Lundi 08:00 - 10:00',
      room: 'Salle A1',
      professor: 'YEDDOU FAROUK'
    },
    {
      id: 'INFO402',
      name: 'Systèmes Distribués',
      schedule: 'Mardi 10:00 - 12:00',
      room: 'Salle B2',
      professor: 'GUENFAF YOUCEF'
    },
    {
      id: 'INFO403',
      name: 'Intelligence Artificielle TD',
      schedule: 'Jeudi 14:00 - 16:00',
      room: 'Salle C3',
      professor: 'YEDDOU FAROUK'
    }
  ];

  useEffect(() => {
    if (!currentStudent) {
      router.push('/login'); // Rediriger vers la page de connexion si pas d'étudiant
      return;
    }

    if (courseId) {
      const course = courses.find(c => c.id === courseId);
      if (course) {
        setSelectedCourse(course);
      } else {
        router.push('/student/courses');
      }
    } else {
      router.push('/student/courses');
    }
  }, [courseId]);

  const handleFingerprintScan = async () => {
    if (!selectedCourse) return;

    setIsScanning(true);
    setScanStatus('scanning');

    try {
      // Simuler le scan d'empreinte
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Créer un nouvel enregistrement de présence
      const newAttendance: AttendanceRecord = {
        id: `ATT${Date.now()}`,
        studentName: currentStudent.name,
        studentId: currentStudent.id,
        course: selectedCourse.id,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        status: 'present',
        verifiedBy: 'Système',
        fingerprintVerified: true
      };

      // Envoyer les données au serveur
      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAttendance),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'enregistrement de la présence');
      }

      setScanStatus('success');
      setTimeout(() => {
        setScanStatus('idle');
        router.push('/student/courses');
      }, 3000);
    } catch (error) {
      console.error('Erreur lors du scan:', error);
      setScanStatus('error');
      setTimeout(() => setScanStatus('idle'), 3000);
    } finally {
      setIsScanning(false);
    }
  };

  if (!selectedCourse) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Marquer ma présence - {selectedCourse.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Informations du cours */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Informations du cours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Horaire</p>
                  <p className="font-medium">{selectedCourse.schedule}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Salle</p>
                  <p className="font-medium">{selectedCourse.room}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Professeur</p>
                  <p className="font-medium">{selectedCourse.professor}</p>
                </div>
              </div>
            </div>

            {/* Scanner d'empreinte */}
            <Card>
              <CardHeader>
                <CardTitle>Scanner mon empreinte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-48 h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    {scanStatus === 'scanning' && (
                      <div className="animate-pulse text-gray-500">Scan en cours...</div>
                    )}
                    {scanStatus === 'success' && (
                      <div className="text-green-500">✓ Empreinte vérifiée avec succès</div>
                    )}
                    {scanStatus === 'error' && (
                      <div className="text-red-500">✗ Erreur de vérification</div>
                    )}
                    {scanStatus === 'idle' && (
                      <div className="text-gray-500">Placez votre doigt sur le scanner</div>
                    )}
                  </div>

                  <button
                    onClick={handleFingerprintScan}
                    disabled={isScanning}
                    className={`px-6 py-3 rounded-lg text-white font-medium ${
                      isScanning
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isScanning ? 'Scan en cours...' : 'Démarrer le scan'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Assurez-vous que votre doigt est propre et sec avant de scanner
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentAttendance;
