import { WorkoutDTO } from "../types";

import { PrismaClient } from "@prisma/client";

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
  try {
    return (
      <div className="grow flex flex-col p-5 w-full items-center">
        <h2 className="text-xl text-center">
          Day {workout.day}&apos;s Workout: {workout.name}
        </h2>
        {/* Display more details about the workout here */}
      </div>
    );
  } catch (error) {
    console.error("Error fetching workout:", error);
    return <div>An error occurred</div>; // Optionally handle the error more gracefully
  }
};

export default Workout;
