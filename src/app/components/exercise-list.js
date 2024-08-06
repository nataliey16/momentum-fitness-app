import React from "react";
import Exercise from "./exercise";

const ExerciseList = ({ exerciseData }) => {
  return (
    <div>
      <h1 className="text-white mt-4 text-center">Your workout</h1>
      <div className="grid grid-cols-2">
        {exerciseData.map((exercise, index) => (
          <Exercise key={index} {...exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
