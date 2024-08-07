import mongoose, { Schema } from "mongoose";

const exerciseSchema = new Schema(
  {
    exerciseType: String,
    required: true,
  },
  {
    category: String,
    required: true,
  },
  {
    sets: Number,
    required: true,
  },
  {
    repetitions: Number,
    required: true,
  },
  {
    notes: String,
  },
  {
    timestamps: true,
  }
);

//EXISTING WORKOUT || IF NEW, THEN CREATE NEW WORKOUT MODEL

const Exercise =
  mongoose.models.Exercise || mongoose.model("Exercise", exerciseSchema);

export default Exercise;
