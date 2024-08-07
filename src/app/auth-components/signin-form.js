"use client";
import React, { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

const LABEL_STYLES = "text-white text-lg my-4";
const INPUT_STYLE = "w-full p-4 mx-0 my-2 rounded-md border-2 border-[#293241]";

const SignInForm = () => {
  const { firebaseSignIn, gitHubSignIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebaseSignIn(email, password);
      alert("Sign-Up Successful!");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSignInWithGitHub = async (e) => {
    e.preventDefault();
    try {
      await gitHubSignIn();
      alert("Sign-Up With GitHub Successful!");
    } catch (error) {
      console.error("Error signing up with GitHub:", error);
    }
  }

  return (
    <div className="w-full max-w-md flex flex-col mt-10">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={LABEL_STYLES}>Email Address</label>
          <input
            className={INPUT_STYLE}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className={LABEL_STYLES}>Password</label>
          <input
            className={INPUT_STYLE}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <button onClick={handleSignInWithGitHub}>Sign In With GitHub</button>
    </div>
  );
};

export default SignInForm;
