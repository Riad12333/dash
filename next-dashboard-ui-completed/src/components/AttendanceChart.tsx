"use client";

import { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface AttendanceData {
  date: string;
  present: number;
  absent: number;
  late: number;
}

interface AttendanceChartProps {
  data: AttendanceData[];
  title: string;
}

const AttendanceChart: FC<AttendanceChartProps> = ({ data, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="present" name="Présent" fill="#4ADE80" />
            <Bar dataKey="absent" name="Absent" fill="#F87171" />
            <Bar dataKey="late" name="Retard" fill="#FBBF24" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
