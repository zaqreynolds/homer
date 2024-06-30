import Link from "next/link";
import { Card, CardContent } from "../../../components/ui/card";
import { ExerciseDTO } from "../types";

const ExerciseCard = ({ name, numSets, suggestedReps, rest }: ExerciseDTO) => {
  return (
    <Card className="flex-row w-full my-2">
      <CardContent className="flex w-full py-2">
        <div className="flex items-center w-2/6">{name}</div>
        <div className="flex items-center w-1/6">{numSets} sets</div>
        {suggestedReps && (
          <div className="flex items-center w-2/6 pl-4">
            {suggestedReps} reps
          </div>
        )}
        {rest && <div className="flex items-center w-1/6 pl-4">{rest}s</div>}
        {/* <Link href={`/workout/%5Bid%5D`} className="w-3/4 text-center">
          Exercise Name
        </Link> */}
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
