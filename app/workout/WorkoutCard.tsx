"use client";
import Link from "next/link";
import { Card, CardContent } from "../../components/ui/card";
import { WorkoutDTO } from "./types";
import { useEffect, useState } from "react";

const WorkoutCard: React.FC<WorkoutDTO> = ({ workout }) => {
  const [inProgress, setInProgress] = useState(false);
  const [isComplete, setComplete] = useState(false);

  useEffect(() => {
    // Assuming workout.exercises is already populated with the relevant exercises
    const exercises = workout.exercises;

    // Check if any exercises are in progress
    const anyInProgressOrCompleted = exercises.some(
      (exercise) => exercise.inProgress || exercise.completed
    );
    setInProgress(anyInProgressOrCompleted);

    // Check if all exercises are completed
    const allCompleted = exercises.every((exercise) => exercise.completed);
    setComplete(allCompleted);
  }, [workout.exercises]);

  return (
    <Card
      className={`flex-row w-full my-2  ${inProgress ? "border-primary" : ""}`}
    >
      <CardContent className="flex w-full justify-between py-2">
        <div className="w-1/4 flex items-center">Day {workout.day}</div>
        <Link href={`/workout/${workout.id}`} className="w-3/4 text-center">
          {workout.name}
        </Link>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
