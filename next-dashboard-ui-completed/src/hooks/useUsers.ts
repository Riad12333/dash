import { User, users as defaultUsers } from '@/lib/data';

// Singleton pour stocker les utilisateurs en mémoire
let globalUsers: User[] = [...defaultUsers];

// Hook personnalisé pour gérer les utilisateurs
export const useUsers = () => {
  // Charger les utilisateurs depuis le localStorage
  const loadUsers = () => {
    const storedData = localStorage.getItem('users-storage');
    if (storedData) {
      try {
        const { state } = JSON.parse(storedData);
        if (Array.isArray(state.users) && state.users.length > 0) {
          globalUsers = state.users;
          return state.users;
        }
      } catch (error) {
        console.error('Erreur lors du chargement des utilisateurs:', error);
      }
    }
    // Si pas de données dans le localStorage ou erreur, utiliser les données par défaut
    return defaultUsers;
  };

  // Sauvegarder les utilisateurs dans le localStorage
  const saveUsers = (users: User[]) => {
    globalUsers = users;
    localStorage.setItem('users-storage', JSON.stringify({
      state: { users },
      version: 0,
    }));
  };

  // Initialiser les données si nécessaire
  if (globalUsers.length === 0) {
    globalUsers = loadUsers();
    saveUsers(globalUsers);
  }

  return {
    getUsers: () => {
      return globalUsers;
    },
    setUsers: (users: User[]) => {
      saveUsers(users);
    },
  };
}; 