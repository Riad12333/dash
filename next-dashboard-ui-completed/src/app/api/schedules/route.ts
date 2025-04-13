import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const schedulesPath = path.join(process.cwd(), 'data', 'schedules.json');
    const schedulesData = await readFile(schedulesPath, 'utf-8');
    const schedules = JSON.parse(schedulesData);

    return NextResponse.json({ schedules });
  } catch (error) {
    console.error('Erreur lors de la lecture des emplois du temps:', error);
    // Si le fichier n'existe pas, retourner un tableau vide
    return NextResponse.json({ schedules: [] });
  }
} 