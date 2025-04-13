'use client';

import { FC } from 'react';
import LoginForm from './LoginForm';

interface LoginPageProps {
  userType: 'student' | 'teacher' | 'admin';
}

const LoginPage: FC<LoginPageProps> = ({ userType }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {userType === 'student' && 'Espace Étudiant'}
            {userType === 'teacher' && 'Espace Enseignant'}
            {userType === 'admin' && 'Espace Administration'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Connectez-vous pour accéder à votre espace
          </p>
        </div>
        <LoginForm role={userType} />
      </div>
    </div>
  );
};

export default LoginPage; 