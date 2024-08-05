"use client";
import React, { useState } from "react";
import { NewExercise } from "../components/new-exercise";

const Tracker = () => {
  const [exercise, setExercise] = useState([]);

  const handleAddExercise = (newExercise) => {
    setExercise((prevExercises) => [...prevExercises, newExercise]);
  };
  return (
    <div className="flex bg-[#292524] justify-center items-center min-h-screen p-24 ">
      <NewExercise handleAddExercise={handleAddExercise} />
    </div>
  );
};

export default Tracker;
