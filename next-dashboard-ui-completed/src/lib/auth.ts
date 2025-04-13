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
}

// Utilisateurs de test
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

export const getUsersByRole = (role: UserRole): User[] => {
  return users.filter(user => user.role === role);
};

export const authenticateUser = (username: string, password: string): User | null => {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    user.lastLogin = new Date().toLocaleString();
  }
  return user || null;
};

export const updateUserInfo = (userId: number, updates: Partial<User>): User | null => {
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) return null;
  
  users[userIndex] = {
    ...users[userIndex],
    ...updates
  };
  
  return users[userIndex];
}; 