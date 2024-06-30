export interface WorkoutCardDTO {
  id: number;
  day: string;
  name: string;
  inProgress?: boolean;
  completed?: boolean;
  currentWeek?: boolean;
}

export interface WorkoutDTO {
  id: number;
  day: string;
  name: string;
  exercises: [string];
  notes?: string;
  inProgress?: boolean;
  completed?: boolean;
  currentWeek?: boolean;
}
