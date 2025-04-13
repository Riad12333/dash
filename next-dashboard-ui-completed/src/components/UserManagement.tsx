'use client';

import { FC, useState } from 'react';
import { User, UserRole, users, getUsersByRole } from '@/lib/auth';
import * as Dialog from '@radix-ui/react-dialog';

const UserManagement: FC = () => {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    role: 'student' as UserRole,
    fullName: '',
    email: ''
  });

  const getLastConnections = () => {
    return [...users]
      .sort((a, b) => {
        const dateA = a.lastLogin ? new Date(a.lastLogin).getTime() : 0;
        const dateB = b.lastLogin ? new Date(b.lastLogin).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, 5);
  };

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'student':
        return 'bg-blue-100 text-blue-800';
      case 'teacher':
        return 'bg-green-100 text-green-800';
      case 'admin':
        return 'bg-purple-100 text-purple-800';
    }
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour ajouter l'utilisateur à la base de données
    setIsAddUserOpen(false);
    setNewUser({
      username: '',
      password: '',
      role: 'student',
      fullName: '',
      email: ''
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des utilisateurs</h2>
        <button
          onClick={() => setIsAddUserOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2"
        >
          <span>➕</span>
          <span>Ajouter un utilisateur</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(['student', 'teacher', 'admin'] as UserRole[]).map((role) => (
          <div key={role} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold capitalize">{role}s</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(role)}`}>
                {getUsersByRole(role).length}
              </span>
            </div>
            <div className="space-y-3">
              {getUsersByRole(role).map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{user.fullName}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">⚙️</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Dernières connexions</h3>
        <div className="space-y-3">
          {getLastConnections().map((user) => (
            <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${user.lastLogin ? 'bg-green-500' : 'bg-gray-300'}`} />
                <div>
                  <p className="font-medium">{user.fullName}</p>
                  <p className="text-sm text-gray-500">{user.lastLogin || 'Jamais connecté'}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(user.role)}`}>
                {user.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Dialog.Root open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-xl p-6">
            <Dialog.Title className="text-xl font-semibold mb-4">
              Ajouter un utilisateur
            </Dialog.Title>
            
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  value={newUser.fullName}
                  onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
                <input
                  type="text"
                  value={newUser.username}
                  onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Rôle</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value as UserRole })}
                  className="mt-1 w-full px-3 py-2 border rounded-lg"
                >
                  <option value="student">Étudiant</option>
                  <option value="teacher">Professeur</option>
                  <option value="admin">Administrateur</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAddUserOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default UserManagement; 