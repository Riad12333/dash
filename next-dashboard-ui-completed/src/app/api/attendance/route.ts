import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

// Simuler une base de données en mémoire
let attendanceRecords: AttendanceRecord[] = [];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const courseId = searchParams.get('courseId');
  const date = searchParams.get('date');

  let filteredRecords = [...attendanceRecords];

  // Filtrer par cours si spécifié
  if (courseId && courseId !== 'all') {
    filteredRecords = filteredRecords.filter(record => record.course === courseId);
  }

  // Filtrer par date si spécifiée
  if (date) {
    filteredRecords = filteredRecords.filter(record => record.date === date);
  }

  // Trier par date et heure
  filteredRecords.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateB.getTime() - dateA.getTime();
  });

  return NextResponse.json(filteredRecords);
}

export async function POST(request: NextRequest) {
  try {
    const newAttendance: AttendanceRecord = await request.json();
    
    // Vérifier si l'étudiant n'est pas déjà marqué présent pour ce cours aujourd'hui
    const existingAttendance = attendanceRecords.find(
      record => 
        record.studentId === newAttendance.studentId &&
        record.course === newAttendance.course &&
        record.date === newAttendance.date
    );

    if (existingAttendance) {
      return NextResponse.json(
        { error: 'Vous êtes déjà marqué présent pour ce cours aujourd\'hui' },
        { status: 400 }
      );
    }

    // Générer un ID unique pour le nouvel enregistrement
    const newId = `ATT${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const attendanceWithId = { ...newAttendance, id: newId };

    // Ajouter le nouvel enregistrement
    attendanceRecords.push(attendanceWithId);

    // Mettre à jour les enregistrements existants pour éviter les doublons
    attendanceRecords = attendanceRecords.filter((record, index, self) => {
      const isDuplicate = self.findIndex(
        r => 
          r.studentId === record.studentId && 
          r.course === record.course && 
          r.date === record.date
      ) !== index;
      return !isDuplicate;
    });

    return NextResponse.json(attendanceWithId, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de la présence:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'enregistrement de la présence' },
      { status: 500 }
    );
  }
} 