import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/lib/data';

interface ProfileState {
  profile: Partial<User> | null;
  updateProfile: (data: Partial<User>) => void;
  setProfile: (profile: User) => void;
  photoUrl: string | null;
  updatePhotoUrl: (url: string) => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: null,
      photoUrl: null,
      setProfile: (profile) => set({ profile }),
      updateProfile: (data) =>
        set((state) => ({
          profile: state.profile ? { ...state.profile, ...data } : data,
        })),
      updatePhotoUrl: (url) => set({ photoUrl: url }),
    }),
    {
      name: 'profile-storage',
    }
  )
); 