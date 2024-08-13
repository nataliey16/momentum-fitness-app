import ExerciseCard from "./exercise-card";
const getExercises = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Exercise", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch exercises.");
    }
    return await res.json();
  } catch (error) {
    console.error("Error loading exercises.", error);
  }
};

const ExerciseList = async () => {
  const { exercises } = await getExercises();
  return (
    <div>
      {exercises && exercises.length > 0 ? (
        <div>
          <h1 className="text-white my-4 text-center text-3xl">Your workout</h1>
          <div className="grid grid-cols-4">
            {exercises.map((exercise, index) => (
              <ExerciseCard id={index} key={index} exercise={exercise} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-white text-center my-8 text-2xl">
          Begin adding exercises to your workout.
        </p>
      )}
    </div>
  );
};

export default ExerciseList;
