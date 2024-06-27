import Link from "next/link";
import { Card, CardContent } from "./ui/card";

interface WorkoutCardDTO {
  id: number;
  day: string;
  workoutName: string;
  inProgress?: boolean;
  completed?: boolean;
  currentWeek?: boolean;
}

const WorkoutCard = ({
  id,
  day = "#",
  workoutName = "Workout Name",
  inProgress = false,
  completed = false,
  currentWeek = true,
}: WorkoutCardDTO) => {
  const handleClick = () => {};

  return (
    <Card className="flex-row w-full my-2">
      <Link href={`/workout/${id}`}>
        <CardContent className="flex w-full justify-between py-2">
          <div className="w-1/4 flex items-center">Day {day}</div>
          <div className="w-3/4 text-center">{workoutName}</div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default WorkoutCard;
