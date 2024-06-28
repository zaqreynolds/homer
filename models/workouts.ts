import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  day: { type: String, required: true },
  name: { type: String, required: true },
  exercises: { type: [String], required: true },
  notes: { type: String },
  inProgress: { type: Boolean },
  completed: { type: Boolean },
  currentWeek: { type: Boolean },
});

const Workout =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);

export default Workout;
