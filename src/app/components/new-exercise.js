"use client";
import { useState } from "react";
import Exercise from "./exercise";
import ExerciseFormData from "../components/exercises.json";
import { useRouter } from "next/navigation";

const LABEL_STYLES = "text-white text-lg my-4";
const INPUT_STYLE = "w-full p-4 mx-0 my-2 rounded-md border-2 border-[#293241]";

export const NewExercise = () => {
  const router = useRouter();
  // const [exerciseType, setExerciseType] = useState("");
  // const [category, setCategory] = useState("Core");
  // const [sets, setSets] = useState(1);
  // const [repetitions, setRepetitions] = useState(1);
  // const [notes, setNotes] = useState("");
  // //const [newExercise, setNewExercise] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [exerciseFormData, setExerciseFormData] = useState({
    exerciseType: "",
    category: "Core",
    sets: 1,
    repetitions: 1,
    notes: "",
  });

  // const handleAddExercise = (addExercise) => {
  //   setExerciseFormData((prevExercises) => [...prevExercises, addExercise]);
  // };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setExerciseFormData((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
    console.log(exerciseFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //POST request to send data to the server/database
    const res = await fetch("api/Exercise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exerciseFormData),
    });

    if (!res.ok) {
      throw new Error("Failed to create a new exercise.");
    }

    router.refresh;
    router.push("/tracker");
    setExerciseFormData({
      exerciseType: "",
      category: "Core",
      sets: 1,
      repetitions: 1,
      notes: "",
    });
    setIsLoading(false);
  };

  // //generate id for each exercise
  // const generateId = () => {
  //   return (
  //     Math.random().toString(36).subStr(2, 9) + Date.now().toString(36)
  //   );
  // };

  // const addExercise = {
  //   id: generateId,
  //   exerciseType,
  //   category,
  //   sets,
  //   repetitions,
  //   notes,
  // };

  // handleAddExercise(addExercise);
  // console.log(exercise);

  // //setNewExercise(exercise); // Set the new exercise for rendering
  // setExerciseType("");
  // setCategory("Core");
  // setSets(1);
  // setRepetitions(1);
  // setNotes("");
  // setIsLoading(true);

  return (
    <div className="w-full max-w-md flex flex-col mt-10 ">
      <h1 className="text-3xl text-center mb-4 text-[#e4c034]">
        Track your Workout
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={LABEL_STYLES}>exercise</label>
          <input
            className={INPUT_STYLE}
            type="text"
            placeholder="E.g., Barbell Squats, Shoulder Press"
            required
            value={exerciseFormData.exerciseType}
            name="exerciseType"
            onChange={(e) => handleChange(e)}
          ></input>
          <label className={LABEL_STYLES}>Category</label>
          <select
            className={INPUT_STYLE}
            name="category"
            value={exerciseFormData.category}
            onChange={(e) => handleChange(e)}
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
            name="sets"
            value={exerciseFormData.sets}
            onChange={(e) => handleChange(e)}
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
            name="repetitions"
            value={exerciseFormData.repetitions}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <label className={LABEL_STYLES}>Notes</label>
          <textarea
            className={INPUT_STYLE}
            placeholder="How did the exercise feel?"
            name="notes"
            value={exerciseFormData.notes}
            onChange={(e) => handleChange(e)}
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
