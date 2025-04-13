'use client';

import { FC } from 'react';
import { User } from '@/lib/data';

interface UserInfoProps {
  user: User;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Administrateur';
      case 'teacher':
        return 'Professeur';
      case 'student':
        return 'Étudiant';
      default:
        return role;
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-lg font-semibold text-blue-600">
            {user.fullName.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user.fullName}</h2>
          <p className="text-sm text-gray-500">{getRoleLabel(user.role)}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo; 