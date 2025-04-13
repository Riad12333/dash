import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

interface Schedule {
  id: string;
  type: 'Étudiants' | 'Professeurs';
  createdAt: string;
  updatedAt?: string;
}

export async function GET() {
  try {
    const schedulesPath = path.join(process.cwd(), 'data', 'schedules.json');
    let schedules: Schedule[] = [];
    
    try {
      const schedulesData = await readFile(schedulesPath, 'utf-8');
      schedules = JSON.parse(schedulesData);
    } catch (error) {
      return NextResponse.json({
        totalSchedules: 0,
        studentSchedules: 0,
        teacherSchedules: 0,
        updatesThisWeek: 0
      });
    }

    // Calculer les statistiques
    const totalSchedules = schedules.length;
    const studentSchedules = schedules.filter(s => s.type === 'Étudiants').length;
    const teacherSchedules = schedules.filter(s => s.type === 'Professeurs').length;
    
    // Calculer les mises à jour de cette semaine
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    const updatesThisWeek = schedules.filter(s => {
      const updateDate = new Date(s.updatedAt || s.createdAt);
      return updateDate >= oneWeekAgo;
    }).length;

    return NextResponse.json({
      totalSchedules,
      studentSchedules,
      teacherSchedules,
      updatesThisWeek
    });
  } catch (error) {
    console.error('Erreur lors du calcul des statistiques:', error);
    return NextResponse.json(
      { error: 'Erreur lors du calcul des statistiques' },
      { status: 500 }
    );
  }
} 