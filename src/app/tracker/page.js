"use client";
import React, { useState } from "react";
import ExerciseData from "../components/exercises.json";
import { NewExercise } from "../components/new-exercise";
import ExerciseList from "../components/exercise-list";

const Tracker = () => {
  const [exerciseData, setExerciseData] = useState(ExerciseData);

  const handleAddExercise = (newExercise) => {
    setExerciseData((prevExercises) => [...prevExercises, newExercise]);
  };
  return (
    <div className="flex flex-col bg-[#292524] justify-center items-center min-h-screen p-24 ">
      <NewExercise handleAddExercise={handleAddExercise} />
      <ExerciseList exerciseData={exerciseData} />
    </div>
  );
};

export default Tracker;
