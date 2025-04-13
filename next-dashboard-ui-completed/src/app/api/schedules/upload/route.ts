import { NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import { mkdir } from 'fs/promises';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const scheduleData = JSON.parse(formData.get('schedule') as string);

    if (!file) {
      return NextResponse.json(
        { error: 'Aucun fichier n\'a été fourni' },
        { status: 400 }
      );
    }

    // Créer le dossier uploads s'il n'existe pas
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'schedules');
    await mkdir(uploadDir, { recursive: true });

    // Lire le contenu du fichier
    const bytes = await file.arrayBuffer();
    const buffer = new Uint8Array(bytes);

    // Créer le nom du fichier avec l'extension originale
    const fileName = `${scheduleData.id}.${file.name.split('.').pop()}`;
    const filePath = path.join(uploadDir, fileName);

    // Écrire le fichier
    await writeFile(filePath, buffer);

    // Sauvegarder les informations dans la base de données
    const schedulesPath = path.join(process.cwd(), 'data', 'schedules.json');
    let schedules = [];
    
    try {
      const schedulesData = await readFile(schedulesPath, 'utf-8');
      schedules = JSON.parse(schedulesData);
    } catch (error) {
      // Si le fichier n'existe pas, on crée un tableau vide
      await mkdir(path.join(process.cwd(), 'data'), { recursive: true });
    }

    schedules.push(scheduleData);
    await writeFile(schedulesPath, JSON.stringify(schedules, null, 2));

    return NextResponse.json({
      message: 'Fichier uploadé avec succès',
      schedule: scheduleData
    });
  } catch (error) {
    console.error('Erreur lors de l\'upload:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'upload du fichier' },
      { status: 500 }
    );
  }
} 