import mongoose from "mongoose";
import { Connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error(
    "Please define the MONGO_URL environment variable inside .env.local"
  );
}

declare global {
  var mongoose:
    | {
        conn: mongoose.Connection | null;
        promise: Promise<mongoose.Connection> | null;
      }
    | undefined;
}

let cached: Connection | null = null;

export async function dbConnect(): Promise<Connection> {
  if (cached) {
    return cached;
  }

  const db = await mongoose.connect(MONGO_URL!);

  cached = db.connection;
  return cached;
}
