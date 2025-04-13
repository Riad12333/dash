interface Student {
  id: string;
  name: string;
  section: string;
  groupe: string;
  academicYear: string;
  email: string;
}

interface Professor {
  id: string;
  name: string;
  faculte: string;
  email: string;
}

interface Course {
  id: string;
  name: string;
  section: string;
  professorId: string;
  roomId: string;
}

interface AttendanceRecord {
  id: string;
  studentId: string;
  courseId: string;
  date: Date;
  isPresent: boolean;
  timestamp: number;
}

interface Schedule {
  id: string;
  courseId: string;
  day: string;
  startTime: string;
  endTime: string;
  roomId: string;
  professorId: string;
}

export type { Student, Professor, Course, AttendanceRecord, Schedule }; 