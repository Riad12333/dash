'use client';

import { FC, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import Link from 'next/link';
import { useNotificationsStore } from '@/store/useNotificationsStore';
import { useAuth } from '@/contexts/AuthContext';

const NotificationsPopover: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'activities' | 'alerts'>('activities');
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotificationsStore();
  const { user } = useAuth();

  const filteredNotifications = notifications.filter(notification => {
    // Si c'est un admin, il voit toutes les notifications
    if (user?.role === 'admin') return true;
    // Pour les autres utilisateurs, ils ne voient que leurs propres notifications
    return notification.user === user?.fullName;
  });

  const getActivityIcon = (type: 'connection' | 'action' | 'system') => {
    switch (type) {
      case 'connection':
        return '🔑';
      case 'action':
        return '📝';
      case 'system':
        return '⚙️';
    }
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
          <span className="text-2xl">🔔</span>
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {unreadCount}
            </span>
          )}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-50"
          sideOffset={5}
          align="end"
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => markAllAsRead()}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Tout marquer comme lu
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setActiveTab('activities')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'activities'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Activités récentes
              </button>
              <button
                onClick={() => setActiveTab('alerts')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'alerts'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Alertes système
              </button>
            </div>

            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start space-x-3 p-3 rounded-lg ${
                    !notification.read ? 'bg-blue-50' : 'hover:bg-gray-50'
                  } transition-colors cursor-pointer`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <span className="text-xl">{getActivityIcon(notification.type)}</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      {notification.user && (
                        <span className="font-medium">{notification.user} </span>
                      )}
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(notification.timestamp).toLocaleString('fr-FR')}
                    </p>
                  </div>
                </div>
              ))}

              {filteredNotifications.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  Aucune notification
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t text-center">
              <Link
                href="/admin/notifications"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Voir toutes les notifications
              </Link>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default NotificationsPopover; 