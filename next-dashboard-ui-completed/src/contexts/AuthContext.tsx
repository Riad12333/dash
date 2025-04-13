'use client';

import { createContext, useContext, useState } from 'react';
import { User } from '@/lib/data';
import { useRouter } from 'next/navigation';
import { useNotificationsStore } from '@/store/useNotificationsStore';
import { useUsersStore } from '@/store/useUsersStore';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { addNotification } = useNotificationsStore();
  const users = useUsersStore((state) => state.users);

  const login = async (username: string, password: string) => {
    const foundUser = users.find(
      (u: User) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);

      // Ajouter une notification pour l'admin
      addNotification({
        type: 'connection',
        message: 'vient de se connecter au système',
        user: foundUser.fullName,
      });

      // Redirection automatique selon le rôle
      if (foundUser.role === 'teacher') {
        router.push('/teacher');
      } else if (foundUser.role === 'student') {
        router.push('/student');
      } else if (foundUser.role === 'admin') {
        router.push('/admin');
      }
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
} 