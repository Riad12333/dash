"use client";

import { FC } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NotificationsPopover from "@/components/NotificationsPopover";
import { useUsersStore } from "@/store/useUsersStore";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useUsers } from "@/hooks/useUsers";

const AdminDashboard: FC = () => {
  // const { status, data } = useSession();

  const { users, isLoading, error, deleteUser, stats } = useUsers();

  // Calcul des statistiques

  const statistic = [
    {
      title: "Total Utilisateurs",
      value: stats.total.toString(),
      change: "+12%",
      icon: "👥",
      description: "Depuis le mois dernier",
      link: "/admin/users",
    },
    {
      title: "Étudiants",
      value: stats.students.toString(),
      change: "+3",
      icon: "📚",
      description: "Cette semaine",
      link: "/admin/users",
    },
    {
      title: "Enseignants",
      value: stats.teachers.toString(),
      change: "+5%",
      icon: "📊",
      description: "Moyenne globale",
      link: "/admin/users",
    },
    {
      title: "Administrateurs",
      value: stats.admins.toString(),
      change: "-1",
      icon: "⚠️",
      description: "Problèmes actifs",
      link: "/admin/users",
    },
  ];

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Tableau de bord administrateur</h1>
          <p className="text-gray-500 mt-1">
            Gérez votre établissement efficacement
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <NotificationsPopover />
          <Link
            href="/admin/settings"
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            ⚙️
          </Link>
        </div>
      </div>

      {/* statistic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statistic.map((stat, index) => (
          <Link key={index} href={stat.link}>
            <Card className="bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{stat.icon}</span>
                  <span
                    className={`text-sm font-medium ${
                      stat.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/admin/users"
                className="p-4 text-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-200"
              >
                <span className="text-2xl mb-2 block">👥</span>
                Gérer les utilisateurs
              </Link>
              <Link
                href="/admin/courses"
                className="p-4 text-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-200"
              >
                <span className="text-2xl mb-2 block">📚</span>
                Gérer les cours
              </Link>
              <Link
                href="/admin/rooms"
                className="p-4 text-center rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all duration-200"
              >
                <span className="text-2xl mb-2 block">🏫</span>
                Gérer les salles
              </Link>
              <Link
                href="/admin/settings"
                className="p-4 text-center rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition-all duration-200"
              >
                <span className="text-2xl mb-2 block">⚙️</span>
                Paramètres
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Activité récente */}
        <Card>
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl mr-4">📝</span>
                <div>
                  <h3 className="font-medium">Nouveau cours créé</h3>
                  <p className="text-sm text-gray-500">
                    Intelligence Artificielle (INFO401) - Il y a 2 heures
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl mr-4">👤</span>
                <div>
                  <h3 className="font-medium">Nouvel utilisateur</h3>
                  <p className="text-sm text-gray-500">
                    Madjid (Étudiant) - Il y a 4 heures
                  </p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl mr-4">✅</span>
                <div>
                  <h3 className="font-medium">Présence mise à jour</h3>
                  <p className="text-sm text-gray-500">
                    Systèmes Distribués (INFO402) - Il y a 6 heures
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
