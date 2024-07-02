export interface WorkoutCardDTO {
  workout: {
    id: number;
    day: string;
    name: string;
    inProgress?: boolean;
    completed?: boolean;
    currentWeek?: boolean;
  };
}

export interface WorkoutDTO {
  workout: {
    id: number;
    day: string;
    name: string;
    exercises: ExerciseDTO[];
    notes?: string | null;
    inProgress?: boolean;
    completed?: boolean;
    currentWeek?: boolean;
  };
}

export interface ExerciseDTO {
  id: number;
  name: string;
  numSets: number;
  sets?: SetDTO[];
  suggestedReps: string;
  reps: number[];
  weight: string | null;
  time: number | null;
  rest: number | null;
  notes: string | null;
  completed: boolean;
  inProgress: boolean;
  alert: boolean;
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
