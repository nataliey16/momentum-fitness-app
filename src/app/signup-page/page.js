"use client";
import React, { useState } from "react";
import SignUpForm from "../auth-components/signup-form";
import SignInForm from "../auth-components/signin-form";

const SignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex bg-[#292524] justify-center items-center min-h-screen p-6">
      <div className="w-full max-w-md flex flex-col mt-10 p-8 bg-[#362F2E] rounded-lg shadow-lg">
        {isSignUp ? <SignInForm /> : <SignUpForm />}
        <button
          onClick={toggleForm}
          className="mt-4 p-2 text-white rounded hover:text-[#e4af00]"
        >
          {isSignUp ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;