"use client";

import { FC, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AttendanceChart from "@/components/AttendanceChart";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useAttendance } from "@/hooks/useAttendance";
import { Loader2 } from "lucide-react";

interface AttendanceRecord {
  id: number;
  timestamp: Date;
  status: string;

  student: {
    id: number;
    name: string;
    email: string;
    fingerprint_id: string;
  };
  course: {
    id: number;
    name: string;
    professor: {
      id: number;
      name: string;
      email: string;
    };
  };
  formattedDate: string;
}

const AdminAttendance: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const searchParams = useSearchParams();
  const search = searchParams.get("courseId");

  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/sign-in");
    },
  });
  const { attendance, isLoading, error } = useAttendance();
  console.log(attendance);
  // Filter records based on search query and selected filters
  const filteredRecords = attendance.filter((record) => {
    const matchesSearch =
      record.course.professor?.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      record.course.professor?.email
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesCourse =
      selectedCourse === "all" ||
      record.course?.id.toString() === selectedCourse;

    // Convert record timestamp to date string for comparison
    const recordDate = new Date(record.timestamp).toISOString().split("T")[0];
    const matchesDate = selectedDate ? recordDate === selectedDate : true;
    return matchesSearch && matchesCourse && matchesDate;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-700";
      case "absent":
        return "bg-red-100 text-red-700";
      case "late":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  useEffect(() => {
    if (search) {
      setSelectedCourse(search);
    }
  }, [search]);
  // Calculate statistics
  const todayStats = {
    present: filteredRecords.filter((r) => r.status === "present").length,
    absent: filteredRecords.filter((r) => r.status === "absent").length,
    late: filteredRecords.filter((r) => r.status === "late").length,
  };

  const totalRecords = todayStats.present + todayStats.absent + todayStats.late;
  const presenceRate =
    totalRecords > 0
      ? Math.round((todayStats.present / totalRecords) * 100)
      : 0;
  const overallStats = {
    present: attendance.filter((r) => r.status.toLowerCase() === "present")
      .length,
    absent: attendance.filter((r) => r.status.toLowerCase() === "absent")
      .length,
    late: attendance.filter((r) => r.status.toLowerCase() === "late").length,
  };

  const overallTotal =
    overallStats.present + overallStats.absent + overallStats.late;

  const overallPresenceRate =
    overallTotal > 0
      ? Math.round((overallStats.present / overallTotal) * 100)
      : 0;
  if (status === "loading" || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 text-red-800 p-4 rounded-md">{error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">
                Taux de présence
              </p>
              <p className="text-3xl font-bold text-green-600">
                {overallPresenceRate}%
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">
                Présents aujourd&apos;hui
              </p>
              <p className="text-3xl font-bold text-blue-600">
                {todayStats.present}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">
                Vérifications d&apos;empreintes
              </p>
              <p className="text-3xl font-bold text-purple-600">
                {filteredRecords.length}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Absents</p>
              <p className="text-3xl font-bold text-red-600">
                {todayStats.absent}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Rechercher un enseignant..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Tous les cours</option>
          {attendance
            .map((record) => record.course)
            .filter(
              (course, index, self) =>
                course && self.findIndex((c) => c?.id === course?.id) === index
            )
            .map(
              (course) =>
                course && (
                  <option key={course.id} value={course.id.toString()}>
                    {course.name}
                  </option>
                )
            )}
        </select>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Exporter
        </button>
      </div>

      {/* Attendance Records */}
      <Card>
        <CardHeader>
          <CardTitle>Registre des présences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Étudiant
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Cours
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Professeur
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredRecords.map((record) => (
                  <tr key={record.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {record.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {record.student?.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {record.course?.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {record.formattedDate}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                          record.status
                        )}`}
                      >
                        {record.status === "present"
                          ? "Présent"
                          : record.status === "absent"
                          ? "Absent"
                          : "En retard"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {record.course?.professor?.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAttendance;
