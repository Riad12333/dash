'use client';

import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useThemeStore } from '@/store/useThemeStore';

type Role = 'admin' | 'teacher' | 'student';
type Permission = string;

interface CustomRole {
  id: number;
  name: string;
  permissions: Permission[];
}

interface RolesConfig {
  types: Role[];
  permissions: Record<Role, Permission[]>;
  customRoles: CustomRole[];
}

interface NotificationTemplate {
  id: number;
  name: string;
  type: string;
  subject: string;
}

interface SystemSettings {
  maintenance: {
    enabled: boolean;
    scheduledDate: string;
    scheduledTime: string;
    estimatedDuration: string;
  };
  backup: {
    frequency: string;
    lastBackup: string;
    retention: number;
    location: string;
  };
  email: {
    smtp: string;
    port: number;
    encryption: string;
    sender: string;
  };
  security: {
    passwordPolicy: {
      minLength: number;
      requireNumbers: boolean;
      requireSymbols: boolean;
      requireUppercase: boolean;
      expiryDays: number;
    };
    sessionTimeout: number;
    maxLoginAttempts: number;
    twoFactorAuth: string;
  };
  roles: RolesConfig;
  notifications: {
    channels: string[];
    templates: NotificationTemplate[];
  };
  logs: {
    types: string[];
    retention: number;
    maxSize: string;
    currentSize: string;
  };
}

const AdminSettings: FC = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  const systemSettings: SystemSettings = {
    maintenance: {
      enabled: false,
      scheduledDate: '2024-04-01',
      scheduledTime: '02:00',
      estimatedDuration: '2',
    },
    backup: {
      frequency: 'daily',
      lastBackup: '2024-03-20 03:00',
      retention: 30,
      location: '/backups',
    },
    email: {
      smtp: 'smtp.universite.fr',
      port: 587,
      encryption: 'TLS',
      sender: 'noreply@universite.fr',
    },
    security: {
      passwordPolicy: {
        minLength: 12,
        requireNumbers: true,
        requireSymbols: true,
        requireUppercase: true,
        expiryDays: 90,
      },
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      twoFactorAuth: 'optional',
    },
    roles: {
      types: ['admin', 'teacher', 'student'],
      permissions: {
        admin: ['all'],
        teacher: ['view_courses', 'edit_grades', 'manage_attendance'],
        student: ['view_grades', 'view_schedule', 'mark_attendance']
      },
      customRoles: [
        { id: 1, name: 'Directeur de département', permissions: ['manage_teachers', 'manage_courses'] },
        { id: 2, name: 'Responsable de formation', permissions: ['manage_students', 'view_reports'] }
      ]
    },
    notifications: {
      channels: ['email', 'sms', 'push'],
      templates: [
        { id: 1, name: 'Bienvenue', type: 'email', subject: 'Bienvenue à l\'université' },
        { id: 2, name: 'Absence', type: 'sms', subject: 'Notification d\'absence' }
      ]
    },
    logs: {
      types: ['error', 'warning', 'info', 'debug'],
      retention: 30,
      maxSize: '1GB',
      currentSize: '650MB'
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Paramètres système</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2">
          <span>💾</span>
          <span>Sauvegarder les modifications</span>
        </button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid grid-cols-6 gap-4 bg-transparent">
          <TabsTrigger
            value="general"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-200"
          >
            Général
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-200"
          >
            Sécurité
          </TabsTrigger>
          <TabsTrigger
            value="roles"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-200"
          >
            Rôles
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-200"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="backup"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-200"
          >
            Sauvegarde
          </TabsTrigger>
          <TabsTrigger
            value="logs"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-200"
          >
            Logs
          </TabsTrigger>
        </TabsList>

        {/* Paramètres généraux */}
        <TabsContent value="general" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-xl font-semibold">Maintenance système</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Mode maintenance</p>
                    <p className="text-sm text-gray-500">
                      Activer le mode maintenance pour les opérations système
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={systemSettings.maintenance.enabled}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Date planifiée</label>
                    <input
                      type="date"
                      value={systemSettings.maintenance.scheduledDate}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Heure planifiée</label>
                    <input
                      type="time"
                      value={systemSettings.maintenance.scheduledTime}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Durée estimée (heures)</label>
                  <input
                    type="number"
                    value={systemSettings.maintenance.estimatedDuration}
                    className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-xl font-semibold">Paramètres d'interface</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Mode sombre</p>
                    <p className="text-sm text-gray-500">
                      Activer le thème sombre par défaut
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Animations</p>
                    <p className="text-sm text-gray-500">
                      Activer les animations de l'interface
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Paramètres de sécurité */}
        <TabsContent value="security" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-xl font-semibold">Politique de mot de passe</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Longueur minimale</label>
                    <input
                      type="number"
                      value={systemSettings.security.passwordPolicy.minLength}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Expiration (jours)</label>
                    <input
                      type="number"
                      value={systemSettings.security.passwordPolicy.expiryDays}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Chiffres requis</p>
                      <p className="text-sm text-gray-500">
                        Exiger au moins un chiffre
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={systemSettings.security.passwordPolicy.requireNumbers}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Symboles requis</p>
                      <p className="text-sm text-gray-500">
                        Exiger au moins un caractère spécial
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={systemSettings.security.passwordPolicy.requireSymbols}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-xl font-semibold">Authentification</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Timeout de session (minutes)</label>
                    <input
                      type="number"
                      value={systemSettings.security.sessionTimeout}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Tentatives de connexion max</label>
                    <input
                      type="number"
                      value={systemSettings.security.maxLoginAttempts}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Double authentification</label>
                  <select
                    value={systemSettings.security.twoFactorAuth}
                    className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  >
                    <option value="disabled">Désactivée</option>
                    <option value="optional">Optionnelle</option>
                    <option value="required">Obligatoire</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Nouvel onglet Rôles */}
        <TabsContent value="roles" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-xl font-semibold">Gestion des rôles</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Rôles par défaut */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Rôles par défaut</h3>
                  <div className="space-y-4">
                    {systemSettings.roles.types.map((role) => (
                      <div key={role} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium capitalize">{role}</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {systemSettings.roles.permissions[role].map((perm) => (
                                <span key={perm} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                  {perm}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                            Modifier
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rôles personnalisés */}
                <div className="pt-6 border-t">
                  <h3 className="text-lg font-medium mb-4">Rôles personnalisés</h3>
                  <div className="space-y-4">
                    {systemSettings.roles.customRoles.map((role) => (
                      <div key={role.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{role.name}</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {role.permissions.map((perm) => (
                                <span key={perm} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                  {perm}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                              Modifier
                            </button>
                            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all duration-200">
                              Supprimer
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                    Créer un nouveau rôle
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Nouvel onglet Logs */}
        <TabsContent value="logs" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-xl font-semibold">Logs système</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Statistiques des logs */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Rétention</p>
                    <p className="text-2xl font-bold text-blue-600">{systemSettings.logs.retention} jours</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Taille maximale</p>
                    <p className="text-2xl font-bold text-green-600">{systemSettings.logs.maxSize}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Taille actuelle</p>
                    <p className="text-2xl font-bold text-yellow-600">{systemSettings.logs.currentSize}</p>
                  </div>
                </div>

                {/* Filtres */}
                <div className="flex gap-4">
                  <select className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                    <option value="all">Tous les types</option>
                    {systemSettings.logs.types.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <input
                    type="date"
                    className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                    Filtrer
                  </button>
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-4">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200">
                    Télécharger les logs
                  </button>
                  <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all duration-200">
                    Vider les logs
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Mise à jour de l'onglet Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-xl font-semibold">Configuration des notifications</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Canaux de notification */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Canaux de notification</h3>
                  <div className="space-y-4">
                    {systemSettings.notifications.channels.map((channel) => (
                      <div key={channel} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium capitalize">{channel}</p>
                          <p className="text-sm text-gray-500">
                            Configuration du canal {channel}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                            Configurer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Templates */}
                <div className="pt-6 border-t">
                  <h3 className="text-lg font-medium mb-4">Templates de notification</h3>
                  <div className="space-y-4">
                    {systemSettings.notifications.templates.map((template) => (
                      <div key={template.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{template.name}</h4>
                            <p className="text-sm text-gray-500">
                              Type: {template.type} • Sujet: {template.subject}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                              Éditer
                            </button>
                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200">
                              Tester
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                    Nouveau template
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Paramètres de sauvegarde */}
        <TabsContent value="backup" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-xl font-semibold">Configuration des sauvegardes</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-600">Fréquence</label>
                  <select
                    value={systemSettings.backup.frequency}
                    className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  >
                    <option value="hourly">Toutes les heures</option>
                    <option value="daily">Quotidienne</option>
                    <option value="weekly">Hebdomadaire</option>
                    <option value="monthly">Mensuelle</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Rétention (jours)</label>
                    <input
                      type="number"
                      value={systemSettings.backup.retention}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Dernière sauvegarde</label>
                    <input
                      type="text"
                      value={systemSettings.backup.lastBackup}
                      disabled
                      className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Emplacement</label>
                  <input
                    type="text"
                    value={systemSettings.backup.location}
                    className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200">
                    Vérifier l'espace disque
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                    Lancer une sauvegarde
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Paramètres email */}
        <TabsContent value="email" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-xl font-semibold">Configuration SMTP</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Serveur SMTP</label>
                    <input
                      type="text"
                      value={systemSettings.email.smtp}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Port</label>
                    <input
                      type="number"
                      value={systemSettings.email.port}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Chiffrement</label>
                    <select
                      value={systemSettings.email.encryption}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    >
                      <option value="none">Aucun</option>
                      <option value="SSL">SSL</option>
                      <option value="TLS">TLS</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email expéditeur</label>
                    <input
                      type="email"
                      value={systemSettings.email.sender}
                      className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200">
                    Tester la configuration
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                    Envoyer un email test
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings; 