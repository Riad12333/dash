import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Schedule {
  id: string;
  name: string;
  department: string;
  type: 'student' | 'teacher';
  year: string;
  semester: string;
  lastUpdated: string;
  status: 'active' | 'draft';
  downloadUrl: string;
}

interface ScheduleState {
  schedules: Schedule[];
  addSchedule: (schedule: Schedule) => void;
  updateSchedule: (schedule: Schedule) => void;
  deleteSchedule: (id: string) => void;
}

const defaultSchedules: Schedule[] = [
  {
    id: 'SCH001',
    name: 'Licence Informatique - 2ème année Section A',
    department: 'Informatique',
    type: 'student',
    year: '2024-2025',
    semester: 'S1',
    lastUpdated: '2024-03-21',
    status: 'active',
    downloadUrl: '/L2-INFO-A.png',
  },
  {
    id: 'SCH002',
    name: 'Licence Informatique - S6',
    department: 'Informatique',
    type: 'student',
    year: '2024-2025',
    semester: 'S2',
    lastUpdated: '2024-03-15',
    status: 'active',
    downloadUrl: '/L2-INFO-A.png',
  },
  {
    id: 'SCH003',
    name: 'Professeurs - Département Info',
    department: 'Informatique',
    type: 'teacher',
    year: '2023-2024',
    semester: 'S2',
    lastUpdated: '2024-03-15',
    status: 'active',
    downloadUrl: '/L2-INFO-A.png',
  },
];

export const useScheduleStore = create<ScheduleState>()(
  persist(
    (set) => ({
      schedules: defaultSchedules,
      addSchedule: (schedule) =>
        set((state) => ({
          schedules: [...state.schedules, schedule],
        })),
      updateSchedule: (updatedSchedule) =>
        set((state) => ({
          schedules: state.schedules.map((schedule) =>
            schedule.id === updatedSchedule.id ? updatedSchedule : schedule
          ),
        })),
      deleteSchedule: (id) =>
        set((state) => ({
          schedules: state.schedules.filter((schedule) => schedule.id !== id),
        })),
    }),
    {
      name: 'schedule-storage',
    }
  )
); 