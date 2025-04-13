'use client';

import { FC, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SystemSettings {
  maintenance: {
    enabled: boolean;
    scheduledDate?: string;
    message: string;
  };
  backup: {
    enabled: boolean;
    frequency: 'daily' | 'weekly' | 'monthly';
    lastBackup?: string;
    nextBackup?: string;
  };
  notifications: {
    emailEnabled: boolean;
    smsEnabled: boolean;
    pushEnabled: boolean;
  };
  security: {
    passwordExpiration: number; // jours
    maxLoginAttempts: number;
    twoFactorAuth: boolean;
  };
}

const SystemSettings: FC = () => {
  const [settings, setSettings] = useState<SystemSettings>({
    maintenance: {
      enabled: false,
      message: 'Maintenance système programmée'
    },
    backup: {
      enabled: true,
      frequency: 'daily',
      lastBackup: '2024-03-20 03:00',
      nextBackup: '2024-03-21 03:00'
    },
    notifications: {
      emailEnabled: true,
      smsEnabled: false,
      pushEnabled: true
    },
    security: {
      passwordExpiration: 90,
      maxLoginAttempts: 3,
      twoFactorAuth: false
    }
  });

  const [isMaintenanceDialogOpen, setIsMaintenanceDialogOpen] = useState(false);

  const handleMaintenanceToggle = () => {
    setSettings(prev => ({
      ...prev,
      maintenance: {
        ...prev.maintenance,
        enabled: !prev.maintenance.enabled
      }
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Paramètres système</h2>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Sauvegarder les modifications
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Maintenance */}
        <Card>
          <CardHeader>
            <CardTitle>Maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>État de la maintenance</span>
                <button
                  onClick={handleMaintenanceToggle}
                  className={`px-4 py-2 rounded-lg ${
                    settings.maintenance.enabled
                      ? 'bg-red-600 text-white'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  {settings.maintenance.enabled ? 'Désactiver' : 'Activer'}
                </button>
              </div>
              {settings.maintenance.enabled && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800">{settings.maintenance.message}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Sauvegardes */}
        <Card>
          <CardHeader>
            <CardTitle>Sauvegardes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Sauvegardes automatiques</span>
                <button
                  onClick={() =>
                    setSettings(prev => ({
                      ...prev,
                      backup: { ...prev.backup, enabled: !prev.backup.enabled }
                    }))
                  }
                  className={`px-4 py-2 rounded-lg ${
                    settings.backup.enabled
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-600 text-white'
                  }`}
                >
                  {settings.backup.enabled ? 'Activées' : 'Désactivées'}
                </button>
              </div>
              <div>
                <p className="text-sm text-gray-500">Dernière sauvegarde : {settings.backup.lastBackup}</p>
                <p className="text-sm text-gray-500">Prochaine sauvegarde : {settings.backup.nextBackup}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Notifications par email</span>
                <button
                  onClick={() =>
                    setSettings(prev => ({
                      ...prev,
                      notifications: {
                        ...prev.notifications,
                        emailEnabled: !prev.notifications.emailEnabled
                      }
                    }))
                  }
                  className={`px-4 py-2 rounded-lg ${
                    settings.notifications.emailEnabled
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-600 text-white'
                  }`}
                >
                  {settings.notifications.emailEnabled ? 'Activées' : 'Désactivées'}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>Notifications push</span>
                <button
                  onClick={() =>
                    setSettings(prev => ({
                      ...prev,
                      notifications: {
                        ...prev.notifications,
                        pushEnabled: !prev.notifications.pushEnabled
                      }
                    }))
                  }
                  className={`px-4 py-2 rounded-lg ${
                    settings.notifications.pushEnabled
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-600 text-white'
                  }`}
                >
                  {settings.notifications.pushEnabled ? 'Activées' : 'Désactivées'}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sécurité */}
        <Card>
          <CardHeader>
            <CardTitle>Sécurité</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiration des mots de passe (jours)
                </label>
                <input
                  type="number"
                  value={settings.security.passwordExpiration}
                  onChange={(e) =>
                    setSettings(prev => ({
                      ...prev,
                      security: {
                        ...prev.security,
                        passwordExpiration: parseInt(e.target.value)
                      }
                    }))
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Authentification à deux facteurs</span>
                <button
                  onClick={() =>
                    setSettings(prev => ({
                      ...prev,
                      security: {
                        ...prev.security,
                        twoFactorAuth: !prev.security.twoFactorAuth
                      }
                    }))
                  }
                  className={`px-4 py-2 rounded-lg ${
                    settings.security.twoFactorAuth
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-600 text-white'
                  }`}
                >
                  {settings.security.twoFactorAuth ? 'Activée' : 'Désactivée'}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dialogue de maintenance */}
      <Dialog.Root open={isMaintenanceDialogOpen} onOpenChange={setIsMaintenanceDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-xl p-6">
            <Dialog.Title className="text-xl font-semibold mb-4">
              Programmer une maintenance
            </Dialog.Title>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date et heure
                </label>
                <input
                  type="datetime-local"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  value={settings.maintenance.message}
                  onChange={(e) =>
                    setSettings(prev => ({
                      ...prev,
                      maintenance: {
                        ...prev.maintenance,
                        message: e.target.value
                      }
                    }))
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setIsMaintenanceDialogOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Annuler
                </button>
                <button
                  onClick={() => setIsMaintenanceDialogOpen(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Programmer
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default SystemSettings; 