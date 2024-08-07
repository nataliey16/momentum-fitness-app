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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        {isSignUp ? "Sign Up" : "Sign In"}
      </h1>
      {isSignUp ? <SignUpForm /> : <SignInForm />}
      <button
        onClick={toggleForm}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default SignUpPage;