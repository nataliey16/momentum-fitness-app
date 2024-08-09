"use client";
import React, { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

const LABEL_STYLES = "text-white text-lg my-4";
const INPUT_STYLE = "w-full p-4 mx-0 my-2 rounded-md border-2 border-[#293241]";
const BUTTON_STYLE = "mt-4 p-4 w-full rounded-md bg-[#e4c034] text-white hover:bg-[#e4af00]";

const SignInForm = () => {
  const { firebaseSignIn, gitHubSignIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebaseSignIn(email, password);
      alert("Sign-In Successful!");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSignInWithGitHub = async (e) => {
    e.preventDefault();
    try {
      await gitHubSignIn();
      alert("Sign-In With GitHub Successful!");
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  }

  return (
    <div>
      <h2 className="text-white text-5xl my-4 text-center">Sign In</h2>
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
        <button type="submit" className={BUTTON_STYLE} >Sign In</button>
      </form>
      <div className="my-4 flex items-center justify-center text-white">
        <span className="border-b border-white w-1/5"></span>
        <span className="mx-2">or</span>
        <span className="border-b border-white w-1/5"></span>
      </div>
      <button onClick={handleSignInWithGitHub} className={BUTTON_STYLE}>Sign In With GitHub</button>
    </div>
  );
};

export default SignInForm;
