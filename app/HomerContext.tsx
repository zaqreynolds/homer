"use client";

import { createContext, useState } from "react";
import { WorkoutDTO } from "./workout/types";

interface HomerContextType {
  workoutList: WorkoutDTO[];
}

const HomerContextDefaultValues: HomerContextType = {
  workoutList: [],
};

const HomerContext = createContext<HomerContextType>(HomerContextDefaultValues);
export default HomerContext;

export const HomerProvider = ({ children }: { children: React.ReactNode }) => {
  const workoutList = [
    {
      id: 1,
      day: "1",
      name: "Lower Body Knee Dominant",
      exercises: [""] as [string],
    },
    {
      id: 2,
      day: "2",
      name: "Upper Body Push",
      exercises: [""] as [string],
    },
    {
      id: 3,
      day: "3",
      name: "Lower Body Hip Dominant",
      exercises: [""] as [string],
    },
    {
      id: 4,
      day: "4",
      name: "Upper Body Pull",
      exercises: [""] as [string],
    },
    {
      id: 5,
      day: "1",
      name: "Lower Body Knee Dominant",
      exercises: [""] as [string],
    },
    {
      id: 6,
      day: "2",
      name: "Upper Body Push",
      exercises: [""] as [string],
    },
    {
      id: 7,
      day: "3",
      name: "Lower Body Hip Dominant",
      exercises: [""] as [string],
    },
    {
      id: 8,
      day: "4",
      name: "Upper Body Pull",
      exercises: [""] as [string],
    },
    {
      id: 9,
      day: "1",
      name: "Lower Body Knee Dominant",
      exercises: [""] as [string],
    },
    {
      id: 10,
      day: "2",
      name: "Upper Body Push",
      exercises: [""] as [string],
    },
    {
      id: 11,
      day: "3",
      name: "Lower Body Hip Dominant",
      exercises: [""] as [string],
    },
    {
      id: 12,
      day: "4",
      name: "Upper Body Pull",
      exercises: [""] as [string],
    },
  ];

  const providerValue = { workoutList };
  return (
    <HomerContext.Provider value={providerValue}>
      {children}
    </HomerContext.Provider>
  );
};
