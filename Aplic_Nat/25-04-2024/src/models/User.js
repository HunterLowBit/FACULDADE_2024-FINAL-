import mongoose from "mongoose";

export function userSchema() {
  new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
}
