import WorkoutCard from "../workout/WorkoutCard";
import { PrismaClient } from "@prisma/client";
import { WorkoutDTO } from "../workout/types";

const ClientWeek = async () => {
  const prisma = new PrismaClient();

  const workouts = await prisma.workout.findMany({
    include: {
      exercises: true, // This will include the exercises relation in the result
    },
  });
  const currentWeekWorkouts = workouts.filter((workout) => workout.currentWeek);
  const historyWorkouts = workouts.filter((workout) => !workout.currentWeek);
  const exercises = workouts.map((workout) => workout.exercises);
  console.log("exercises", exercises);

  console.log("workouts", workouts);

  return (
    //TODO: will have to add p-5 padding here
    <div className="grow flex flex-col w-full items-center">
      <h2 className="text-xl">This Week</h2>
      {currentWeekWorkouts.map((workout) => (
        <WorkoutCard workout={workout} key={workout.id} />
      ))}
      <h2 className="text-xl mt-4">My History</h2>
      {historyWorkouts.map((workout) => (
        <WorkoutCard workout={workout} key={workout.id} />
      ))}
    </div>
  );
};

export default ClientWeek;
