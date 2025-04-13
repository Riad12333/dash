'use client';

import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useThemeStore } from '@/store/useThemeStore';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { isDarkMode } = useThemeStore();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const getNavigationItems = () => {
    if (!user) return [];

    switch (user.role) {
      case 'student':
        return [
          { href: '/student', label: 'Tableau de bord', icon: '📊' },
          { href: '/student/courses', label: 'Cours', icon: '📚' },
          { href: '/student/schedule', label: 'Emploi du temps', icon: '📅' },
          { href: '/student/profile', label: 'Profil', icon: '👤' },
          
        ];
      case 'teacher':
        return [
          { href: '/teacher', label: 'Tableau de bord', icon: '📊' },
          { href: '/teacher/attendance', label: 'Présence', icon: '✅' },
          { href: '/teacher/courses', label: 'Cours', icon: '📚' },
          { href: '/teacher/profile', label: 'Profil', icon: '👤' },
          { href: '/teacher/schedule', label: 'Emploi du temps', icon: '📅' },
        ];
      case 'admin':
        return [
          { href: '/admin', label: 'Tableau de bord', icon: '📊' },
          { href: '/admin/users', label: 'Utilisateurs', icon: '👥' },
          { href: '/admin/attendance', label: 'Présence', icon: '✅' },
          { href: '/admin/courses', label: 'Cours', icon: '📚' },
          { href: '/admin/rooms', label: 'Salles', icon: '🏫' },
          
          { href: '/admin/schedules', label: 'Emploi du temps', icon: '📅' }
        ];
      default:
        return [];
    }
  };

  return (
    <div className={cn('min-h-screen', isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50')}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed h-full">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                🎓
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">USTHB</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Gestion de Présence</p>
              </div>
            </div>
          </div>
          <nav className="mt-6">
            <div className="flex flex-col h-[calc(100vh-8rem)] justify-between">
              <div>
                {getNavigationItems().map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700',
                      pathname === item.href && 'bg-gray-100 dark:bg-gray-700'
                    )}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <span className="mr-2">🚪</span>
                Déconnexion
              </button>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 ml-64 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
