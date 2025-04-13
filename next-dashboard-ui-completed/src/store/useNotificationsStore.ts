import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Notification {
  id: number;
  type: 'connection' | 'action' | 'system';
  message: string;
  timestamp: string;
  user?: string;
  read: boolean;
}

interface NotificationsStore {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
}

export const useNotificationsStore = create<NotificationsStore>()(
  persist(
    (set) => ({
      notifications: [],
      unreadCount: 0,
      addNotification: (notification) => {
        set((state) => {
          const newNotification = {
            ...notification,
            id: Date.now(),
            timestamp: new Date().toISOString(),
            read: false,
          };
          return {
            notifications: [newNotification, ...state.notifications],
            unreadCount: state.unreadCount + 1,
          };
        });
      },
      markAsRead: (id) => {
        set((state) => {
          const notifications = state.notifications.map((n) =>
            n.id === id ? { ...n, read: true } : n
          );
          return {
            notifications,
            unreadCount: notifications.filter((n) => !n.read).length,
          };
        });
      },
      markAllAsRead: () => {
        set((state) => ({
          notifications: state.notifications.map((n) => ({ ...n, read: true })),
          unreadCount: 0,
        }));
      },
    }),
    {
      name: 'notifications-storage',
    }
  )
); 