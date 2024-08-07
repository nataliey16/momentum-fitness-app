"use client";
import React, { useState } from "react";
import ExerciseFormData from "../components/exercises.json";
import { NewExercise } from "../components/new-exercise";
import ExerciseList from "../components/exercise-list";

const Tracker = () => {
  // const [exerciseFormData, setExerciseFormData] = useState(ExerciseFormData);

  // const handleAddExercise = (addExercise) => {
  //   setExerciseFormData((prevExercises) => [...prevExercises, addExercise]);
  // };
  return (
    <div className="flex flex-col bg-[#292524] justify-center items-center min-h-screen p-24 ">
      <NewExercise handleAddExercise={handleAddExercise} />
      <ExerciseList exerciseFormData={exerciseFormData} />
    </div>
  );
};

export default Tracker;
