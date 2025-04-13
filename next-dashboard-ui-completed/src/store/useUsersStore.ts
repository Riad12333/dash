import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, users as defaultUsers } from '@/lib/data';

interface UsersState {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: number, user: Partial<User>) => void;
  deleteUser: (id: number) => void;
}

export const useUsersStore = create<UsersState>()(
  persist(
    (set) => ({
      users: defaultUsers,
      addUser: (user) =>
        set((state) => {
          const newUser = {
            id: Math.max(...state.users.map(u => u.id)) + 1,
            lastLogin: new Date().toISOString(),
            ...user,
          };
          
          return {
            users: [...state.users, newUser],
          };
        }),
      updateUser: (id, updatedUser) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === id ? { ...user, ...updatedUser } : user
          ),
        })),
      deleteUser: (id) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        })),
    }),
    {
      name: 'users-storage',
    }
  )
); 