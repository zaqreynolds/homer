import Link from "next/link";
import { Card, CardContent } from "../../components/ui/card";
import { WorkoutCardDTO } from "./types";

const WorkoutCard = ({
  id,
  day = "#",
  name = "Workout Name",
  inProgress = false,
  completed = false,
  currentWeek = true,
}: WorkoutCardDTO) => {
  return (
    <Card className="flex-row w-full my-2">
      <CardContent className="flex w-full justify-between py-2">
        <div className="w-1/4 flex items-center">Day {day}</div>
        <Link href={`/workout/${id}`} className="w-3/4 text-center">
          {name}
        </Link>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
