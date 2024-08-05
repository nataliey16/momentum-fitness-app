const LIST_STYLES =
  "bg-[#3f3f46] rounded-lg p-4 text-white max-w-[300px] text-white";

const Exercise = ({ exerciseType, category, sets, repetitions, notes }) => {
  return (
    <div className="my-4">
      <ul className={LIST_STYLES}>
        <li>Exercise: {exerciseType}</li>
        <li> Category: {category}</li>
        <li>Number of Sets: {sets}</li>
        <li>Number of Repetitions: {repetitions}</li>
        <li>Notes: {notes}</li>
      </ul>
    </div>
  );
};

export default Exercise;
