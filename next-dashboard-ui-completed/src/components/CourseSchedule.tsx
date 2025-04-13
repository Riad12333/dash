'use client';

import { FC } from 'react';

interface Course {
  id: string;
  name: string;
  professor: string;
  room: string;
  day: string;
  startTime: string;
  endTime: string;
  section?: string;
}

interface CourseScheduleProps {
  courses: Course[];
  showActions?: boolean;
  onEditClick?: (course: Course) => void;
  onDeleteClick?: (course: Course) => void;
}

const CourseSchedule: FC<CourseScheduleProps> = ({
  courses,
  showActions = false,
  onEditClick,
  onDeleteClick
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Jour</th>
            <th className="p-2 text-left">Cours</th>
            <th className="p-2 text-left">Professeur</th>
            <th className="p-2 text-left">Salle</th>
            <th className="p-2 text-left">Horaire</th>
            {showActions && <th className="p-2 text-left">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-b">
              <td className="p-2">{course.day}</td>
              <td className="p-2">{course.name}</td>
              <td className="p-2">{course.professor}</td>
              <td className="p-2">{course.room}</td>
              <td className="p-2">{`${course.startTime} - ${course.endTime}`}</td>
              {showActions && (
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => onEditClick?.(course)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => onDeleteClick?.(course)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Supprimer
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

export default CourseSchedule; 