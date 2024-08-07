import mongoose, { Schema } from "mongoose";

const exerciseSchema = new Schema(
  {
    exerciseType: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    repetitions: {
      type: Number,
      required: true,
    },

    notes: {
      notes: String,
    },
  },
  {
    timestamps: true,
  }
);

//EXISTING WORKOUT || IF NEW, THEN CREATE NEW WORKOUT MODEL

const Exercise =
  mongoose.models.Exercise || mongoose.model("Exercise", exerciseSchema);

export default Exercise;
