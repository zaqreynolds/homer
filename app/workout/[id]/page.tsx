import { dbConnect } from "@/lib/mongo";
import Workouts from "@/models/workouts";
import { WorkoutDTO } from "../types";

const Workout = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  await dbConnect();

  const workout = await Workouts.findById(id);

  if (!workout) {
    return <div>No workout found</div>;
  }

  return (
    <div className="grow flex flex-col w-full items-center">
      <h2 className="text-xl">
        Day {workout.day}&apos;s Workout: {workout.name}
        {/* hi */}
      </h2>
      {/* Display more details about the workout here */}
    </div>
  );
};

export default Workout;
