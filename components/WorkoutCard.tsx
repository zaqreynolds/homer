import { Card, CardContent } from "./ui/card";

const WorkoutCard = () => {
  return (
    <Card className="flex-row w-full my-2">
      <CardContent className="flex w-full justify-around py-2">
        <div>Day #</div>
        <div>Workout Name</div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
