import Workout from "../models/workouts";
import { dbConnect } from "./mongo";
import mongoose from "mongoose";

const seedData = [
  {
    id: 1,
    day: "1",
    name: "Lower Body Knee Dominant",
    exercises: [""],
  },
  {
    id: 2,
    day: "2",
    name: "Upper Body Push",
    exercises: [""],
  },
  {
    id: 3,
    day: "3",
    name: "Lower Body Hip Dominant",
    exercises: [""],
  },
  {
    id: 4,
    day: "4",
    name: "Upper Body Pull",
    exercises: [""],
  },
  {
    id: 5,
    day: "1",
    name: "Lower Body Knee Dominant",
    exercises: [""],
  },
  {
    id: 6,
    day: "2",
    name: "Upper Body Push",
    exercises: [""],
  },
  {
    id: 7,
    day: "3",
    name: "Lower Body Hip Dominant",
    exercises: [""],
  },
  {
    id: 8,
    day: "4",
    name: "Upper Body Pull",
    exercises: [""],
  },
  {
    id: 9,
    day: "1",
    name: "Lower Body Knee Dominant",
    exercises: [""],
  },
  {
    id: 10,
    day: "2",
    name: "Upper Body Push",
    exercises: [""],
  },
  {
    id: 11,
    day: "3",
    name: "Lower Body Hip Dominant",
    exercises: [""],
  },
  {
    id: 12,
    day: "4",
    name: "Upper Body Pull",
    exercises: [""],
  },
];

const seedDb = async () => {
  await dbConnect();

  try {
    await Workout.insertMany(seedData);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  }

  mongoose.connection.close();
};

seedDb();
