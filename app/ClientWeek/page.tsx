import WorkoutCard from "../workout/WorkoutCard";
import { PrismaClient } from "@prisma/client";
import { WorkoutDTO } from "../workout/types";

const ClientWeek = async () => {
  const prisma = new PrismaClient();

  const workouts = await prisma.workout.findMany();
  const currentWeekWorkouts = workouts.filter((workout) => workout.currentWeek);
  const historyWorkouts = workouts.filter((workout) => !workout.currentWeek);

  return (
    //TODO: will have to add p-5 padding here
    <div className="grow flex flex-col w-full items-center">
      <h2 className="text-xl">This Week</h2>
      {currentWeekWorkouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          id={workout.id}
          day={workout.day}
          name={workout.name}
        />
      ))}
      <h2 className="text-xl mt-2">My History</h2>
      {historyWorkouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          id={workout.id}
          day={workout.day}
          name={workout.name}
        />
      ))}
    </div>
  );
};

export default ClientWeek;
