'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from 'sonner';

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
      <Toaster position="top-right" />
    </AuthProvider>
  );
} 