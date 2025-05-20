"use client";

import { FC, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Course, CourseStats } from "@/hooks/useCourses";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSections } from "@/hooks/useSections";
import { useRooms } from "@/hooks/useRooms";
import { useProfessors } from "@/hooks/useProfessors";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

interface Schedule {
  day: string;
  start_time: string;
  end_time: string;
  room: string;
}

interface NewCourse {
  name: string;
  professor_id: number;
  section_id: number;
  schedules: Schedule[];
}

interface CourseManagementProps {
  courses: Course[];
  isLoading: boolean;
  error: string | null;
  stats: CourseStats;
}

const CourseManagement: FC<CourseManagementProps> = ({ courses }) => {
  const { sections } = useSections();
  const { rooms } = useRooms();
  const { professors } = useProfessors();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [scheduleErrors, setScheduleErrors] = useState<{
    [key: string]: string;
  }>({});
  const [newCourse, setNewCourse] = useState<NewCourse>({
    name: "",
    professor_id: 0,
    section_id: 0,
    schedules: [
      {
        day: "",
        start_time: "",
        end_time: "",
        room: "",
      },
    ],
  });
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState<number | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);

  const validateSchedules = () => {
    const errors: { [key: string]: string } = {};

    newCourse.schedules.forEach((schedule, index) => {
      if (!schedule.day) {
        errors[`day-${index}`] = "Le jour est requis";
      }

      if (!schedule.start_time) {
        errors[`start_time-${index}`] = "L'heure de début est requise";
      }

      if (!schedule.end_time) {
        errors[`end_time-${index}`] = "L'heure de fin est requise";
      }

      if (!schedule.room) {
        errors[`room-${index}`] = "La salle est requise";
      }

      if (schedule.start_time && schedule.end_time) {
        const start = new Date(`1970-01-01T${schedule.start_time}`);
        const end = new Date(`1970-01-01T${schedule.end_time}`);

        if (end <= start) {
          errors[`time-${index}`] =
            "L'heure de fin doit être supérieure à l'heure de début";
        }
      }
    });

    // Check for overlapping schedules within the form
    for (let i = 0; i < newCourse.schedules.length; i++) {
      for (let j = i + 1; j < newCourse.schedules.length; j++) {
        const schedule1 = newCourse.schedules[i];
        const schedule2 = newCourse.schedules[j];

        if (
          schedule1.day === schedule2.day &&
          schedule1.room === schedule2.room
        ) {
          const start1 = new Date(`1970-01-01T${schedule1.start_time}`);
          const end1 = new Date(`1970-01-01T${schedule1.end_time}`);
          const start2 = new Date(`1970-01-01T${schedule2.start_time}`);
          const end2 = new Date(`1970-01-01T${schedule2.end_time}`);

          if (start1 < end2 && end1 > start2) {
            errors[`overlap-${i}`] =
              "Les horaires se chevauchent pour cette salle";
            errors[`overlap-${j}`] =
              "Les horaires se chevauchent pour cette salle";
          }
        }
      }
    }

    setScheduleErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const checkAvailability = async () => {
    try {
      const response = await fetch("/api/courses/check-availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          professor_id: newCourse.professor_id,
          section_id: newCourse.section_id,
          schedules: newCourse.schedules,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to check availability");
      }

      if (!data.available) {
        const newErrors = { ...scheduleErrors };
        data.conflicts.forEach((conflict: any) => {
          const errorKey = `${conflict.type}-${conflict.index}`;
          newErrors[errorKey] = conflict.message;
        });
        setScheduleErrors(newErrors);
        return false;
      }

      return true;
    } catch (error) {
      toast({
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Failed to check availability",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleAddSchedule = () => {
    setNewCourse({
      ...newCourse,
      schedules: [
        ...newCourse.schedules,
        {
          day: "",
          start_time: "",
          end_time: "",
          room: "",
        },
      ],
    });
  };

  const handleRemoveSchedule = (index: number) => {
    setNewCourse({
      ...newCourse,
      schedules: newCourse.schedules.filter((_, i) => i !== index),
    });
  };

  const handleScheduleChange = (
    index: number,
    field: keyof Schedule,
    value: string
  ) => {
    const updatedSchedules = [...newCourse.schedules];
    updatedSchedules[index] = {
      ...updatedSchedules[index],
      [field]: value,
    };
    setNewCourse({
      ...newCourse,
      schedules: updatedSchedules,
    });

    // Clear error when field is updated
    if (scheduleErrors[`${field}-${index}`]) {
      const newErrors = { ...scheduleErrors };
      delete newErrors[`${field}-${index}`];
      if (field === "start_time" || field === "end_time") {
        delete newErrors[`time-${index}`];
      }
      setScheduleErrors(newErrors);
    }
  };

  const handleAddCourse = async () => {
    try {
      if (!validateSchedules()) {
        toast({
          title: "Erreur",
          description: "Veuillez corriger les erreurs dans les horaires",
          variant: "destructive",
        });
        return;
      }

      const isAvailable = await checkAvailability();
      if (!isAvailable) {
        toast({
          title: "Erreur",
          description: "Il y a des conflits d'horaires",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create course");
      }

      setIsAddDialogOpen(false);
      setNewCourse({
        name: "",
        professor_id: 0,
        section_id: 0,
        schedules: [
          {
            day: "",
            start_time: "",
            end_time: "",
            room: "",
          },
        ],
      });
      setScheduleErrors({});
      toast({
        title: "Succès",
        description: "Cours ajouté avec succès",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description:
          error instanceof Error ? error.message : "Failed to create course",
        variant: "destructive",
      });
    }
  };

  const handleDeleteClick = (course: Course) => {
    setCourseToDelete(course);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!courseToDelete) return;

    try {
      setIsDeleting(courseToDelete.id);
      const response = await fetch(`/api/courses/${courseToDelete.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete course");
      }

      toast({
        title: "Cours supprimé",
        description: "Le cours a été supprimé avec succès.",
      });
      window.location.reload();
      //redirect("/courses");
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la suppression du cours.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(null);
      setIsDeleteDialogOpen(false);
      setCourseToDelete(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Liste des Cours</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-200">
              <span className="mr-2">+</span>
              Ajouter un cours
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-white">
            <DialogHeader className="bg-white border-b pb-4">
              <DialogTitle>Ajouter un nouveau cours</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4 bg-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Nom du cours *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={newCourse.name}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, name: e.target.value })
                    }
                    placeholder="ex: Intelligence Artificielle"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section" className="text-gray-700">
                    Section *
                  </Label>
                  <Select
                    required
                    value={newCourse.section_id.toString()}
                    onValueChange={(value) =>
                      setNewCourse({
                        ...newCourse,
                        section_id: parseInt(value),
                      })
                    }
                  >
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="Sélectionner une section" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.map((section) => (
                        <SelectItem
                          key={section.id}
                          value={section.id.toString()}
                        >
                          {section.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="professor" className="text-gray-700">
                    Enseignant *
                  </Label>
                  <Select
                    required
                    value={newCourse.professor_id.toString()}
                    onValueChange={(value) =>
                      setNewCourse({
                        ...newCourse,
                        professor_id: parseInt(value),
                      })
                    }
                  >
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="Sélectionner un enseignant" />
                    </SelectTrigger>
                    <SelectContent>
                      {professors.map((professor) => (
                        <SelectItem
                          key={professor.id}
                          value={professor.id.toString()}
                        >
                          {professor.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Schedules */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-gray-700">Horaires *</Label>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAddSchedule}
                    className="text-sm"
                  >
                    + Ajouter un horaire
                  </Button>
                </div>
                {newCourse.schedules.map((schedule, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-4 items-end border p-4 rounded-lg relative"
                  >
                    <div className="space-y-2">
                      <Label htmlFor={`day-${index}`} className="text-gray-700">
                        Jour
                      </Label>
                      <Select
                        required
                        value={schedule.day}
                        onValueChange={(value) =>
                          handleScheduleChange(index, "day", value)
                        }
                      >
                        <SelectTrigger
                          className={cn(
                            "border-gray-200",
                            scheduleErrors[`day-${index}`] && "border-red-500"
                          )}
                        >
                          <SelectValue placeholder="Jour" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Lundi">Lundi</SelectItem>
                          <SelectItem value="Mardi">Mardi</SelectItem>
                          <SelectItem value="Mercredi">Mercredi</SelectItem>
                          <SelectItem value="Jeudi">Jeudi</SelectItem>
                          <SelectItem value="Vendredi">Vendredi</SelectItem>
                        </SelectContent>
                      </Select>
                      {scheduleErrors[`day-${index}`] && (
                        <p className="text-sm text-red-500">
                          {scheduleErrors[`day-${index}`]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor={`start-${index}`}
                        className="text-gray-700"
                      >
                        Début
                      </Label>
                      <Input
                        id={`start-${index}`}
                        required
                        type="time"
                        value={schedule.start_time}
                        onChange={(e) =>
                          handleScheduleChange(
                            index,
                            "start_time",
                            e.target.value
                          )
                        }
                        className={cn(
                          "border-gray-200",
                          scheduleErrors[`start_time-${index}`] &&
                            "border-red-500"
                        )}
                      />
                      {scheduleErrors[`start_time-${index}`] && (
                        <p className="text-sm text-red-500">
                          {scheduleErrors[`start_time-${index}`]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`end-${index}`} className="text-gray-700">
                        Fin
                      </Label>
                      <Input
                        id={`end-${index}`}
                        required
                        type="time"
                        value={schedule.end_time}
                        onChange={(e) =>
                          handleScheduleChange(
                            index,
                            "end_time",
                            e.target.value
                          )
                        }
                        className={cn(
                          "border-gray-200",
                          scheduleErrors[`end_time-${index}`] &&
                            "border-red-500"
                        )}
                      />
                      {scheduleErrors[`end_time-${index}`] && (
                        <p className="text-sm text-red-500">
                          {scheduleErrors[`end_time-${index}`]}
                        </p>
                      )}
                      {scheduleErrors[`time-${index}`] && (
                        <p className="text-sm text-red-500">
                          {scheduleErrors[`time-${index}`]}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor={`room-${index}`}
                        className="text-gray-700"
                      >
                        Salle
                      </Label>
                      <div className="flex gap-2">
                        <Select
                          required
                          value={schedule.room}
                          onValueChange={(value) =>
                            handleScheduleChange(index, "room", value)
                          }
                        >
                          <SelectTrigger
                            className={cn(
                              "border-gray-200",
                              scheduleErrors[`room-${index}`] &&
                                "border-red-500"
                            )}
                          >
                            <SelectValue placeholder="Sélectionner une salle" />
                          </SelectTrigger>
                          <SelectContent>
                            {rooms.map((room) => (
                              <SelectItem
                                key={room.id}
                                value={room.id.toString()}
                              >
                                {room.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {index > 0 && (
                          <Button
                            type="button"
                            variant="destructive"
                            onClick={() => handleRemoveSchedule(index)}
                            className="px-2"
                          >
                            ×
                          </Button>
                        )}
                      </div>
                      {scheduleErrors[`room-${index}`] && (
                        <p className="text-sm text-red-500">
                          {scheduleErrors[`room-${index}`]}
                        </p>
                      )}
                    </div>
                    {/* Display availability conflicts */}
                    {(scheduleErrors[`professor-${index}`] ||
                      scheduleErrors[`room-${index}`] ||
                      scheduleErrors[`section-${index}`]) && (
                      <div className="col-span-4 mt-2 space-y-1">
                        {scheduleErrors[`professor-${index}`] && (
                          <p className="text-sm text-red-500">
                            {scheduleErrors[`professor-${index}`]}
                          </p>
                        )}
                        {scheduleErrors[`room-${index}`] && (
                          <p className="text-sm text-red-500">
                            {scheduleErrors[`room-${index}`]}
                          </p>
                        )}
                        {scheduleErrors[`section-${index}`] && (
                          <p className="text-sm text-red-500">
                            {scheduleErrors[`section-${index}`]}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-4 border-t bg-gray-50">
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddDialogOpen(false);
                  setNewCourse({
                    name: "",
                    professor_id: 0,
                    section_id: 0,
                    schedules: [
                      {
                        day: "",
                        start_time: "",
                        end_time: "",
                        room: "",
                      },
                    ],
                  });
                }}
                className="bg-white hover:bg-gray-100"
              >
                Annuler
              </Button>
              <Button
                onClick={handleAddCourse}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Ajouter
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{course.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {course.id}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(course);
                    }}
                    disabled={isDeleting === course.id}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    {isDeleting === course.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash-2"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    )}
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Enseignant</p>
                    <p className="font-medium">
                      {course.professor?.name || "Non assigné"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sessions totales</p>
                    <p className="font-medium">{course.totalSessions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Taux de présence</p>
                    <p className="font-medium">
                      {Math.round(course.attendanceRate)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email enseignant</p>
                    <p className="font-medium truncate">
                      {course.professor?.email || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white border border-gray-200 shadow-lg">
          <DialogHeader className="border-b pb-4">
            <DialogTitle className="text-red-600 font-semibold">
              Confirmer la suppression
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-gray-600">
              Êtes-vous sûr de vouloir supprimer le cours &ldquo;
              {courseToDelete?.name}&rdquo; ? Cette action est irréversible.
            </p>
          </div>
          <DialogFooter className="gap-2 sm:gap-0 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => {
                setIsDeleteDialogOpen(false);
                setCourseToDelete(null);
              }}
              className="hover:bg-gray-100"
            >
              Annuler
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConfirm}
              disabled={isDeleting !== null}
              className="bg-red-600 hover:bg-red-700"
            >
              {isDeleting !== null ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Suppression...
                </>
              ) : (
                "Supprimer"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseManagement;
