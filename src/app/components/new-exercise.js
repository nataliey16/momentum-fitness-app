"use client";

const LABEL_STYLES = "text-white text-lg my-4";
const INPUT_STYLE = "w-full p-4 mx-0 my-2 rounded-md border-2 border-[#293241]";

export const NewExercise = () => {
  return (
    <div className="w-full max-w-md flex flex-col mt-10">
      <form>
        <div>
          <label className={LABEL_STYLES}>exercise</label>
          <input
            className={INPUT_STYLE}
            type="text"
            placeholder="E.g., Barbell Squats"
            required
          ></input>
        </div>
        <div>
          <label className={LABEL_STYLES}>number of Sets</label>
          <input
            className={INPUT_STYLE}
            type="number"
            min="1"
            max="99"
            required
          ></input>
        </div>
        <div>
          <label className={LABEL_STYLES}>Enter number of Repetitions</label>
          <input
            className={INPUT_STYLE}
            type="number"
            min="1"
            max="99"
            required
          ></input>
        </div>
        <div>
          <label className={LABEL_STYLES}>Notes</label>
          <textarea
            className={INPUT_STYLE}
            placeholder="How did the exercise feel?"
          ></textarea>
        </div>
      </form>
      <button className="bg-[#e4c034] hover:bg-[#edd993] rounded-md p-4 ">
        Enter
      </button>{" "}
    </div>
  );
};
