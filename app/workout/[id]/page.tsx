import { dbConnect } from "@/lib/mongo";
import Workouts from "@/models/workouts";
import { WorkoutDTO } from "../types";
import mongoose from "mongoose";

const Workout = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  await dbConnect();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return (
      <div className="grow flex flex-col w-full items-center ">
        <div className="grow flex items-center">Oops! No workout found...</div>
      </div>
    );
  }
  try {
    const workout = await Workouts.findById(id);

    return (
      <div className="grow flex flex-col w-full items-center">
        <h2 className="text-xl">
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
