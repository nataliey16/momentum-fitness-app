const EXERCISE_STYLES = "bg-[#3f3f46] rounded-lg p-4 m-2 text-white w-full "; // Adjusted width classes

const Exercise = ({ exerciseType, category, sets, repetitions, notes }) => {
  return (
    <div className="flex">
      <ul className={EXERCISE_STYLES}>
        <li>Exercise: {exerciseType}</li>
        <li>Category: {category}</li>
        <li>Number of Sets: {sets}</li>
        <li>Number of Repetitions: {repetitions}</li>
        <li>Notes: {notes}</li>
      </ul>
    </div>
  );
};

export default Exercise;
