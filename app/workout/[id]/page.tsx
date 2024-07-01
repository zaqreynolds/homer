import { WorkoutDTO, ExerciseDTO } from "../types";
import { PrismaClient } from "@prisma/client";
import ExerciseCard from "./ExerciseCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const prisma = new PrismaClient();

const Workout = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const prisma = new PrismaClient();

  const workout = await prisma.workout.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!workout) {
    return (
      <div className="grow flex flex-col w-full items-center ">
        <div className="grow flex items-center">Oops! No workout found...</div>
      </div>
    );
  }

  const exercises = (await prisma.exercise.findMany({
    where: {
      workoutId: workout.id,
    },
  })) as ExerciseDTO[];
  try {
    return (
      <div className="grow flex flex-col p-5 w-full items-center overflow-auto">
        <h2 className="text-xl text-center">
          Day {workout.day}: {workout.name}
        </h2>
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
        <div className="flex grow" />
        <Card>
          <CardHeader>Coach&apos;s Notes</CardHeader>
          <CardContent>
            {workout.notes && <div>{workout.notes}</div>}
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    console.error("Error fetching workout:", error);
    return <div>An error occurred</div>; // Optionally handle the error more gracefully
  }
};

export default Workout;
