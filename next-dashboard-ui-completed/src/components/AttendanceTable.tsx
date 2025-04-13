'use client';

import { FC } from 'react';

interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  courseId: string;
  courseName: string;
  date: string;
  time: string;
  status: 'present' | 'absent' | 'late';
}

interface AttendanceTableProps {
  records: AttendanceRecord[];
  showCourse?: boolean;
  showActions?: boolean;
  onActionClick?: (record: AttendanceRecord) => void;
}

const AttendanceTable: FC<AttendanceTableProps> = ({
  records,
  showCourse = true,
  showActions = false,
  onActionClick
}) => {
  const getStatusBadgeClass = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'late':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">ID Étudiant</th>
            <th className="p-2 text-left">Nom</th>
            {showCourse && <th className="p-2 text-left">Cours</th>}
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Heure</th>
            <th className="p-2 text-left">Status</th>
            {showActions && <th className="p-2 text-left">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="border-b">
              <td className="p-2">{record.studentId}</td>
              <td className="p-2">{record.studentName}</td>
              {showCourse && <td className="p-2">{record.courseName}</td>}
              <td className="p-2">{record.date}</td>
              <td className="p-2">{record.time}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded-full ${getStatusBadgeClass(record.status)}`}>
                  {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                </span>
              </td>
              {showActions && (
                <td className="p-2">
                  <button
                    onClick={() => onActionClick?.(record)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Modifier
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable; 