import { dbConnect } from "@/lib/mongo";
import Workout from "@/models/workouts";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "GET") {
    const { id } = req.query;
    try {
      const workout = id ? await Workout.findById(id) : await Workout.find();
      if (!workout) {
        return res.status(404).json({ error: "Workout not found" });
      }
      res.status(200).json(workout);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const workout = new Workout(req.body);
      await workout.save();
      res.status(201).json(workout);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    try {
      const workout = await Workout.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!workout) {
        return res.status(404).json({ error: "Workout not found" });
      }
      res.status(200).json(workout);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    try {
      const workout = await Workout.findByIdAndDelete(id);
      if (!workout) {
        return res.status(404).json({ error: "Workout not found" });
      }
      res.status(204).json({ message: "Workout deleted" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
