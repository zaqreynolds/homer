import { dbConnect } from "@/lib/mongo";
import WorkoutCard from "../workout/WorkoutCard";

const ClientWeek = async () => {
  await dbConnect();

  return (
    <div className="grow flex flex-col w-full items-center">
      <h2 className="text-xl">This Week</h2>
      <WorkoutCard
        id="667f3a6807f76a2009063b5e"
        day="1"
        name="Lower Body Knee Dominant"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b5f"
        day="2"
        name="Upper Body Push"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b60"
        day="3"
        name="Lower Body Hip Dominant"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b61"
        day="4"
        name="Upper Body Pull"
      />

      <h2 className="text-xl mt-2">My History</h2>

      <WorkoutCard
        id="667f3a6807f76a2009063b62"
        day="1"
        name="Lower Body Knee Dominant"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b63"
        day="2"
        name="Upper Body Push"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b64"
        day="3"
        name="Lower Body Hip Dominant"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b65"
        day="4"
        name="Upper Body Pull"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b66"
        day="1"
        name="Lower Body Knee Dominant"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b67"
        day="2"
        name="Upper Body Push"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b68"
        day="3"
        name="Lower Body Hip Dominant"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b69"
        day="4"
        name="Upper Body Pull"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b62"
        day="1"
        name="Lower Body Knee Dominant"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b63"
        day="2"
        name="Upper Body Push"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b64"
        day="3"
        name="Lower Body Hip Dominant"
      />
      <WorkoutCard
        id="667f3a6807f76a2009063b65"
        day="4"
        name="Upper Body Pull"
      />
    </div>
  );
};

export default ClientWeek;
