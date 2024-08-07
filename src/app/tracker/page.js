import React from "react";
import ExerciseList from "../components/exercise-list";
import { NewExercise } from "../components/new-exercise";

const Tracker = () => {
  return (
    <div className="flex flex-col bg-[#292524] justify-center items-center min-h-screen p-24 ">
      <NewExercise />
      <ExerciseList />
    </div>
  );
};

export default Tracker;
