'use client';

import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SignInPage: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-indigo-100 to-purple-100 opacity-50" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md w-full space-y-8 p-10 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl"
      >
        <div className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <span className="text-3xl text-white">👋</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Système de Gestion de Présence
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600"
          >
            Sélectionnez votre type de compte pour continuer
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 space-y-6"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/student/login" 
                  className="group relative w-full flex items-center justify-center py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <span className="absolute left-6 text-2xl">👨‍🎓</span>
              <span className="font-medium text-lg">Espace Étudiant</span>
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/teacher/login"
                  className="group relative w-full flex items-center justify-center py-4 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <span className="absolute left-6 text-2xl">👨‍🏫</span>
              <span className="font-medium text-lg">Espace Professeur</span>
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/admin/login"
                  className="group relative w-full flex items-center justify-center py-4 px-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <span className="absolute left-6 text-2xl">👨‍💼</span>
              <span className="font-medium text-lg">Espace Administrateur</span>
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            Besoin d'aide ? <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Contactez-nous</a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignInPage;