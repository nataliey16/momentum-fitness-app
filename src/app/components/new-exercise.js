"use client";
import { useState } from "react";
import Exercise from "./exercise";

const LABEL_STYLES = "text-white text-lg my-4";
const INPUT_STYLE = "w-full p-4 mx-0 my-2 rounded-md border-2 border-[#293241]";

export const NewExercise = ({ handleAddExercise }) => {
  const [exerciseType, setExerciseType] = useState("");
  const [category, setCategory] = useState("");
  const [sets, setSets] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [notes, setNotes] = useState("");
  const [newExercise, setNewExercise] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const exercise = { exerciseType, category, sets, repetitions, notes };
    console.log(exercise);

    //handleAddExercise(exercise);

    setNewExercise(exercise); // Set the new exercise for rendering

    setExerciseType("");
    setCategory("");
    setSets("");
    setRepetitions("");
    setNotes("");
  };

  return (
    <div className="w-full max-w-md flex flex-col mt-10 ">
      <form onSubmit={handleSubmit}>
        <div>
          <label className={LABEL_STYLES}>exercise</label>
          <input
            className={INPUT_STYLE}
            type="text"
            placeholder="E.g., Barbell Squats, Shoulder Press"
            required
            onChange={(e) => setExerciseType(e.target.value)}
            value={exerciseType}
          ></input>
          <label className={LABEL_STYLES}>Category</label>
          <select
            className={INPUT_STYLE}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
          >
            <option></option>
            <option>Core</option>
            <option>Lower Body</option>
            <option>Upper Body</option>
          </select>
        </div>
        <div>
          <label className={LABEL_STYLES}>Number of Sets</label>
          <input
            className={INPUT_STYLE}
            type="number"
            min="1"
            max="99"
            required
            placeholder="sets"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          ></input>
        </div>
        <div>
          <label className={LABEL_STYLES}>Number of Repetitions</label>
          <input
            className={INPUT_STYLE}
            type="number"
            min="1"
            max="99"
            required
            placeholder="Reps"
            value={repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
          ></input>
        </div>
        <div>
          <label className={LABEL_STYLES}>Notes</label>
          <textarea
            className={INPUT_STYLE}
            placeholder="How did the exercise feel?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-[#e4c034] hover:bg-[#edd993] rounded-md p-4 w-full"
          onClick={() => handleSubmit}
        >
          Add exercise
        </button>{" "}
      </form>
      {newExercise && (
        <Exercise
          exerciseType={newExercise.exerciseType}
          category={newExercise.category}
          sets={newExercise.sets}
          repetitions={newExercise.repetitions}
          notes={newExercise.notes}
        />
      )}{" "}
    </div>
  );
};
