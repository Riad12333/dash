'use client';

import { FC, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useNotificationsStore } from '@/store/useNotificationsStore';

const AdminNotifications: FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedNotification, setSelectedNotification] = useState<number | null>(null);
  const { notifications, markAsRead, markAllAsRead } = useNotificationsStore();

  const notificationStats = {
    total: notifications.length,
    unread: notifications.filter(n => !n.read).length,
    high: notifications.filter(n => n.type === 'system').length,
    today: notifications.filter(n => {
      const today = new Date();
      const notifDate = new Date(n.timestamp);
      return notifDate.toDateString() === today.toDateString();
    }).length,
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'connection':
        return '🔑';
      case 'action':
        return '📝';
      case 'system':
        return '⚙️';
      default:
        return '📢';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'connection':
        return 'bg-blue-50 border-blue-200';
      case 'action':
        return 'bg-green-50 border-green-200';
      case 'system':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getPriorityBadge = (type: string) => {
    switch (type) {
      case 'system':
        return 'bg-red-100 text-red-800';
      case 'action':
        return 'bg-yellow-100 text-yellow-800';
      case 'connection':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.type === filter;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 p-6"
    >
      {/* Header with improved design */}
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-md">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Centre de notifications
          </h1>
          <p className="text-gray-500 mt-2">Gérez vos notifications système</p>
        </div>
        <div className="flex space-x-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => markAllAsRead()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
          >
            <span>✓</span>
            <span>Tout marquer comme lu</span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-gray-700 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-200 flex items-center space-x-2"
          >
            <span>⚙️</span>
            <span>Paramètres</span>
          </motion.button>
        </div>
      </div>

      {/* Stats with improved cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
            <CardContent className="pt-6">
              <div className="text-center relative">
                <div className="w-16 h-16 mx-auto bg-blue-200 rounded-full flex items-center justify-center mb-4 shadow-inner">
                  <span className="text-2xl">📬</span>
                </div>
                <p className="text-sm font-medium text-gray-600">Total</p>
                <p className="text-4xl font-bold text-blue-600 mt-2">{notificationStats.total}</p>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-20" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
            <CardContent className="pt-6">
              <div className="text-center relative">
                <div className="w-16 h-16 mx-auto bg-yellow-200 rounded-full flex items-center justify-center mb-4 shadow-inner">
                  <span className="text-2xl">📩</span>
                </div>
                <p className="text-sm font-medium text-gray-600">Non lues</p>
                <p className="text-4xl font-bold text-yellow-600 mt-2">{notificationStats.unread}</p>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-200 rounded-full opacity-20" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-gradient-to-br from-red-50 to-red-100 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
            <CardContent className="pt-6">
              <div className="text-center relative">
                <div className="w-16 h-16 mx-auto bg-red-200 rounded-full flex items-center justify-center mb-4 shadow-inner">
                  <span className="text-2xl">🔔</span>
                </div>
                <p className="text-sm font-medium text-gray-600">Priorité haute</p>
                <p className="text-4xl font-bold text-red-600 mt-2">{notificationStats.high}</p>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-200 rounded-full opacity-20" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-gradient-to-br from-green-50 to-green-100 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
            <CardContent className="pt-6">
              <div className="text-center relative">
                <div className="w-16 h-16 mx-auto bg-green-200 rounded-full flex items-center justify-center mb-4 shadow-inner">
                  <span className="text-2xl">📅</span>
                </div>
                <p className="text-sm font-medium text-gray-600">Aujourd'hui</p>
                <p className="text-4xl font-bold text-green-600 mt-2">{notificationStats.today}</p>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-20" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Filters and Notifications with improved design */}
      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-gray-100 p-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Notifications
            </CardTitle>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
              >
                <option value="all">Toutes les notifications</option>
                <option value="unread">Non lues</option>
                <option value="connection">Connexions</option>
                <option value="action">Actions</option>
                <option value="system">Système</option>
              </select>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Exporter
              </motion.button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <motion.div layout className="space-y-4">
            {filteredNotifications.map((notification) => (
              <motion.div
                key={notification.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ scale: 1.02 }}
                className={`flex items-start space-x-4 p-6 rounded-xl border ${getNotificationColor(
                  notification.type
                )} ${!notification.read ? 'ring-2 ring-blue-400' : ''} cursor-pointer transition-all duration-200 hover:shadow-lg`}
                onClick={() => {
                  setSelectedNotification(notification.id === selectedNotification ? null : notification.id);
                  if (!notification.read) markAsRead(notification.id);
                }}
              >
                <div className="text-3xl">{getNotificationIcon(notification.type)}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium">
                        {notification.user && `${notification.user} `}
                        {notification.message}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date(notification.timestamp).toLocaleString('fr-FR')}
                      </p>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getPriorityBadge(
                      notification.type
                    )}`}>
                      {notification.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
            {filteredNotifications.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                Aucune notification
              </div>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdminNotifications; 