"use client";

import { FC, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { toast } from "sonner";
import { writeFile } from "fs/promises";
import path from "path";
import { ScheduleStats } from "@/components/ScheduleStats";
import { useSchedules, Schedule as ScheduleType } from "@/hooks/useSchedules";
import { useProfessors, Professor } from "@/hooks/useProfessors";
import { useSections, Section } from "@/hooks/useSections";
import { useCourses, Course } from "@/hooks/useCourses";
import { Badge } from "@/components/ui/badge";
import * as TabsPrimitive from "@radix-ui/react-tabs";

interface Schedule {
  id: number;
  course_id: number;
  day: string;
  start_time: string;
  end_time: string;
  room: string;
}

const DAYS_OF_WEEK = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const AdminSchedules: FC = () => {
  const {
    professors,
    isLoading: professorsLoading,
    error: professorsError,
  } = useProfessors();
  const {
    sections,
    isLoading: sectionsLoading,
    error: sectionsError,
  } = useSections();
  const {
    courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useCourses();
  const [selectedProfessor, setSelectedProfessor] = useState<string>("all");
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<string>("professors");

  // Fetch all schedules
  const {
    schedules,
    isLoading: schedulesLoading,
    error: schedulesError,
  } = useSchedules();

  // Filter schedules based on selected professor or section
  const filteredSchedules =
    activeTab === "professors"
      ? selectedProfessor === "all"
        ? schedules
        : schedules.filter((schedule) => {
            const course = courses.find((c) => c.id === schedule.course_id);
            return course?.professor?.name === selectedProfessor;
          })
      : selectedSection === "all"
      ? schedules
      : schedules.filter((schedule) => {
          const course = courses.find((c) => c.id === schedule.course_id);

          return course?.section?.name === selectedSection;
        });
  // Group schedules by day
  const schedulesByDay = DAYS_OF_WEEK.reduce((acc, day) => {
    acc[day] = filteredSchedules.filter((schedule) => schedule.day === day);
    return acc;
  }, {} as Record<string, Schedule[]>);

  // Format time from ISO string to readable format
  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  // Show error toast if there's an error
  useEffect(() => {
    if (schedulesError) {
      toast.error(schedulesError);
    }
    if (professorsError) {
      toast.error(professorsError);
    }
    if (sectionsError) {
      toast.error(sectionsError);
    }
    if (coursesError) {
      toast.error(coursesError);
    }
  }, [schedulesError, professorsError, sectionsError, coursesError]);

  const isLoading =
    schedulesLoading || professorsLoading || sectionsLoading || coursesLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const selectedProfessorData =
    selectedProfessor !== "all"
      ? professors.find((p) => p.name === selectedProfessor)
      : null;

  const selectedSectionData =
    selectedSection !== "all"
      ? sections.find((s) => s.name === selectedSection)
      : null;

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Emploi du temps</h2>
      </div>
      <ScheduleStats />

      <TabsPrimitive.Root
        defaultValue="professors"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsPrimitive.List className="flex space-x-2 border-b mb-4">
          <TabsPrimitive.Trigger
            value="professors"
            className="px-4 py-2 font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=inactive]:text-gray-500 hover:text-gray-700"
          >
            Par Professeur
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger
            value="sections"
            className="px-4 py-2 font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 data-[state=inactive]:text-gray-500 hover:text-gray-700"
          >
            Par Section
          </TabsPrimitive.Trigger>
        </TabsPrimitive.List>

        <TabsPrimitive.Content value="professors">
          <div className="mb-6">
            <Select
              value={selectedProfessor}
              onValueChange={(value) => {
                setSelectedProfessor(value);
                setActiveTab("professors");
              }}
            >
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Sélectionner un professeur" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les professeurs</SelectItem>
                {professors.map((professor) => (
                  <SelectItem key={professor.id} value={professor.name}>
                    {professor.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedProfessorData && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                {selectedProfessorData.name}
              </h3>
              <p className="text-sm text-gray-600">
                {selectedProfessorData.department}
              </p>
            </div>
          )}
        </TabsPrimitive.Content>

        <TabsPrimitive.Content value="sections">
          <div className="mb-6">
            <Select
              value={selectedSection}
              onValueChange={(value) => {
                setSelectedSection(value);
                setActiveTab("sections");
              }}
            >
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Sélectionner une section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les sections</SelectItem>
                {sections.map((section) => (
                  <SelectItem key={section.id} value={section.name}>
                    {section.name} - Année {section.year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedSectionData && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Section {selectedSectionData.name}
              </h3>
              <p className="text-sm text-gray-600">
                Année {selectedSectionData.year}
              </p>
            </div>
          )}
        </TabsPrimitive.Content>
      </TabsPrimitive.Root>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DAYS_OF_WEEK.map((day) => (
          <Card key={day} className="bg-white border-none shadow-lg">
            <CardHeader className="border-b bg-gray-50">
              <CardTitle className="text-lg font-semibold text-gray-800">
                {day}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {schedulesByDay[day]?.length > 0 ? (
                <div className="space-y-4">
                  {schedulesByDay[day].map((schedule) => {
                    const course = courses.find(
                      (c) => c.id === schedule.course_id
                    );
                    return (
                      <div
                        key={schedule.id}
                        className="bg-gray-50 p-4 rounded-lg space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <Badge variant="secondary" className="text-sm">
                            {course?.name || `Cours ${schedule.course_id}`}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {formatTime(schedule.start_time)} -{" "}
                            {formatTime(schedule.end_time)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Salle: {schedule.room}
                        </div>
                        {activeTab === "professors" && course?.section && (
                          <div className="text-sm text-gray-600">
                            Section: {course.section.name} - Année{" "}
                            {course.section.year}
                          </div>
                        )}
                        {activeTab === "sections" && course?.professor && (
                          <div className="text-sm text-gray-600">
                            Professeur: {course.professor.name}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-4">
                  Pas de cours programmé
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminSchedules;
