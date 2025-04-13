import './globals.css';
import { Inter } from 'next/font/google';
import { RootLayoutClient } from '@/components/RootLayoutClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'USTHB - Système de Gestion',
  description: 'Système de gestion pour l\'Université des Sciences et de la Technologie Houari Boumediene',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
