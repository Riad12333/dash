'use client';

import { FC, useEffect } from 'react';
import UserProfile from '@/components/UserProfile';
import { useProfileStore } from '@/store/useProfileStore';
import { useAuth } from '@/contexts/AuthContext';

const AdminProfilePage: FC = () => {
  const { user } = useAuth();
  const setProfile = useProfileStore((state) => state.setProfile);

  useEffect(() => {
    if (user) {
      setProfile(user);
    }
  }, [user, setProfile]);

  return <UserProfile />;
};

export default AdminProfilePage; 