"use client";
import { useState } from "react";
import Exercise from "./exercise";

const LABEL_STYLES = "text-white text-lg my-4";
const INPUT_STYLE = "w-full p-4 mx-0 my-2 rounded-md border-2 border-[#293241]";

export const NewExercise = ({ handleAddExercise }) => {
  const [exerciseType, setExerciseType] = useState("");
  const [category, setCategory] = useState("Core");
  const [sets, setSets] = useState(1);
  const [repetitions, setRepetitions] = useState(1);
  const [notes, setNotes] = useState("");
  //const [newExercise, setNewExercise] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //generate id for each exercise
    const generateId = () => {
      return Math.random().toString(36).subStr(2, 9) + Date.now().toString(36);
    };

    const exercise = {
      id: generateId,
      exerciseType,
      category,
      sets,
      repetitions,
      notes,
    };

    handleAddExercise(exercise);
    console.log(exercise);

    //setNewExercise(exercise); // Set the new exercise for rendering
    setExerciseType("");
    setCategory("Core");
    setSets(1);
    setRepetitions(1);
    setNotes("");
    setIsLoading(true);
  };

  return (
    <div className="w-full max-w-md flex flex-col mt-10 ">
      <h1 className="text-3xl mb-4 text-[#e4c034]">Track your Workout</h1>
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
            <option value="Core">Core</option>
            <option value="Lower Body">Lower Body</option>
            <option value="Upper Body">Upper Body</option>
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
          className="bg-[#e4c034] hover:bg-[#edd993] rounded-md my-2 py-4 w-full"
          onClick={() => handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <p>Loading...</p> : <p> Add exercise</p>}
        </button>{" "}
      </form>
    </div>
  );
};
