"use client";
import React, { useState } from "react";
import { NewExercise } from "../components/new-exercise";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ExerciseList from "../components/exercise-list";

const Tracker = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  if (!user) {
    return (
      <div className="flex flex-col bg-[#292524] justify-center items-center min-h-screen p-24">
        <h2 className="text-white mb-4 text-3xl">
          Please sign in to access the tracker.
        </h2>
        <button
          onClick={() => router.push("/signup-page")}
          className="text-white text-3xl bg-transparent border-none cursor-pointer hover:text-yellow-500 hover:underline"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="flex bg-[#292524] justify-center items-center min-h-screen p-24 ">
      <NewExercise />
      <ExerciseList />
    </div>
  );
};

export default Tracker;
