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

export interface ExerciseDTO {
  id: number;
  name: string;
  numSets: number;
  suggestedReps: string;
  reps?: [number];
  weight?: string;
  time?: number;
  rest?: number;
  notes?: string;
  completed?: boolean;
  inProgress?: boolean;
  alert?: boolean;
  workoutId: number;
}

export interface SetDTO {
  id: number;
  success: boolean | null;
  failure: boolean | null;
  exerciseId: number;
}

export interface ExerciseCardPropsDTO {
  exercise: ExerciseDTO;
  sets?: SetDTO[];
}
