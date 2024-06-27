import WorkoutCard from "@/components/WorkoutCard";

const ClientWeek = () => {
  return (
    <div className="grow flex flex-col w-full items-center">
      <h2 className="text-xl">This Week</h2>
      <WorkoutCard id={1} day="1" workoutName="Lower Body Knee Dominant" />
      <WorkoutCard id={2} day="2" workoutName="Upper Body Push" />
      <WorkoutCard id={3} day="3" workoutName="Lower Body Hip Dominant" />
      <WorkoutCard id={4} day="4" workoutName="Upper Body Pull" />
      <h2 className="text-xl mt-2">My History</h2>
      <WorkoutCard id={5} day="1" workoutName="Lower Body Knee Dominant" />
      <WorkoutCard id={6} day="2" workoutName="Upper Body Push" />
      <WorkoutCard id={7} day="3" workoutName="Lower Body Hip Dominant" />
      <WorkoutCard id={8} day="4" workoutName="Upper Body Pull" />
      <WorkoutCard id={9} day="1" workoutName="Lower Body Knee Dominant" />
      <WorkoutCard id={10} day="2" workoutName="Upper Body Push" />
      <WorkoutCard id={11} day="3" workoutName="Lower Body Hip Dominant" />
      <WorkoutCard id={12} day="4" workoutName="Upper Body Pull" />
      <WorkoutCard id={13} day="1" workoutName="Lower Body Knee Dominant" />
      <WorkoutCard id={14} day="2" workoutName="Upper Body Push" />
      <WorkoutCard id={15} day="3" workoutName="Lower Body Hip Dominant" />
      <WorkoutCard id={16} day="4" workoutName="Upper Body Pull" />
    </div>
  );
};

export default ClientWeek;
