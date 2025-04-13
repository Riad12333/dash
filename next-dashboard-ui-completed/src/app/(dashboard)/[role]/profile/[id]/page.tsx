'use client';

import { FC, useEffect } from 'react';
import { useParams } from 'next/navigation';
import UserProfile from '@/components/UserProfile';
import { useProfileStore } from '@/store/useProfileStore';
import { users } from '@/lib/data';

const UserProfilePage: FC = () => {
  const params = useParams();
  const setProfile = useProfileStore((state) => state.setProfile);

  useEffect(() => {
    const user = users.find(u => u.id === Number(params.id));
    if (user) {
      setProfile(user);
    }
  }, [params.id, setProfile]);

  return <UserProfile />;
};

export default UserProfilePage; 