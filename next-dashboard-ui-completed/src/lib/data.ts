// Types
export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: number;
  username: string;
  password: string;
  role: UserRole;
  fullName: string;
  email: string;
  lastLogin?: string;
  phoneNumber?: string;
  address?: string;
  dateOfBirth?: string;
  photoUrl?: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  professor: string;
  type: 'CM' | 'TD' | 'TP';
  room: string;
  day: string;
  startTime: string;
  endTime: string;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  type: 'Amphi' | 'Salle TD' | 'Salle TP';
  equipment: string[];
}

// Données des utilisateurs
export const users: User[] = [
  {
    id: 1,
    username: 'madjid',
    password: 'etudiant123',
    role: 'student',
    fullName: 'OULDGOUGAM MADJID',
    email: 'madjid@univ.dz',
    lastLogin: '2024-03-20 15:30',
    phoneNumber: '0555123456',
    dateOfBirth: '1999-05-15',
    address: 'Constantine, Algérie'
  },
  {
    id: 2,
    username: 'raouf',
    password: 'etudiant123',
    role: 'student',
    fullName: 'YEDDOU RAOUF',
    email: 'raouf@univ.dz',
    lastLogin: '2024-03-20 14:45',
    phoneNumber: '0555789012',
    dateOfBirth: '1998-08-20',
    address: 'Constantine, Algérie'
  },
  {
    id: 3,
    username: 'farouk',
    password: 'prof123',
    role: 'teacher',
    fullName: 'YEDDOU FAROUK',
    email: 'farouk@univ.dz',
    lastLogin: '2024-03-20 16:00',
    phoneNumber: '0555345678',
    dateOfBirth: '1980-03-10',
    address: 'Constantine, Algérie'
  },
  {
    id: 4,
    username: 'youcef',
    password: 'prof123',
    role: 'teacher',
    fullName: 'GUENFAF YOUCEF',
    email: 'youcef@univ.dz',
    lastLogin: '2024-03-20 13:15',
    phoneNumber: '0555901234',
    dateOfBirth: '1975-11-25',
    address: 'Constantine, Algérie'
  },
  {
    id: 5,
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    fullName: 'Administrateur',
    email: 'admin@univ.dz',
    lastLogin: '2024-03-20 17:00',
    phoneNumber: '0555567890'
  }
];

// Données des cours
export const courses: Course[] = [
  {
    id: 'CRS001',
    code: 'INFO401',
    name: 'Intelligence Artificielle',
    professor: 'YEDDOU FAROUK',
    type: 'CM',
    room: 'Amphi A',
    day: 'Lundi',
    startTime: '08:00',
    endTime: '09:30'
  },
  {
    id: 'CRS002',
    code: 'INFO402',
    name: 'Systèmes Distribués',
    professor: 'GUENFAF YOUCEF',
    type: 'CM',
    room: 'Amphi B',
    day: 'Mardi',
    startTime: '10:00',
    endTime: '11:30'
  },
  {
    id: 'CRS003',
    code: 'INFO403',
    name: 'Intelligence Artificielle TD',
    professor: 'YEDDOU FAROUK',
    type: 'TD',
    room: 'Salle 301',
    day: 'Mercredi',
    startTime: '13:00',
    endTime: '14:30'
  }
];

// Données des salles
export const rooms: Room[] = [
  {
    id: 'ROOM001',
    name: 'Amphi A',
    capacity: 200,
    type: 'Amphi',
    equipment: ['Projecteur', 'Système audio', 'Climatisation']
  },
  {
    id: 'ROOM002',
    name: 'Amphi B',
    capacity: 150,
    type: 'Amphi',
    equipment: ['Projecteur', 'Système audio', 'Climatisation']
  },
  {
    id: 'ROOM003',
    name: 'Salle 301',
    capacity: 30,
    type: 'Salle TD',
    equipment: ['Tableau blanc', 'Projecteur']
  },
  {
    id: 'ROOM004',
    name: 'Salle TP 1',
    capacity: 25,
    type: 'Salle TP',
    equipment: ['Ordinateurs', 'Projecteur', 'Climatisation']
  }
];