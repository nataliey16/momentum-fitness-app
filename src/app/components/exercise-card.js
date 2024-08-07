const HEADER_STYLES = "text-lg mb-2"; // Adjusted width classes
const EXERCISE_STYLES = "bg-[#3f3f46] rounded-lg p-4 m-2 text-white w-full "; // Adjusted width classes

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="flex">
      <ul className={EXERCISE_STYLES}>
        <li className={HEADER_STYLES}>Exercise: {exercise.exerciseType}</li>
        <li>Category: {exercise.category}</li>
        <li>Number of Sets: {exercise.sets}</li>
        <li>Number of Repetitions: {exercise.repetitions}</li>
        <li>Notes: {exercise.notes}</li>
      </ul>
    </div>
  );
};

export default ExerciseCard;
