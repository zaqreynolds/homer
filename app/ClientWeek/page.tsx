import WorkoutCard from "@/components/WorkoutCard";

const ClientWeek = () => {
  return (
    <div className="grow flex flex-col w-full items-center">
      <h2 className="text-xl">This Week</h2>
      <WorkoutCard />
      <WorkoutCard />
      <WorkoutCard />
      <WorkoutCard />
      <h2 className="text-xl mt-2">My History</h2>
      <WorkoutCard />
      <WorkoutCard />
      <WorkoutCard />
    </div>
  );
};

export default ClientWeek;
