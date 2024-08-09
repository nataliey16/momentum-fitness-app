"use client";
import React, { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

const LABEL_STYLES = "text-white text-lg my-4";
const INPUT_STYLE = "w-full p-4 mx-0 my-2 rounded-md border-2 border-[#293241] normal-case";
const BUTTON_STYLE = "mt-4 p-4 w-full rounded-md bg-[#e4c034] text-white hover:bg-[#e4af00]";

const SignUpForm = () => {
    const { firebaseSignUp, gitHubSignIn } = useUserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await firebaseSignUp(email, password);
            alert("Sign-Up Successful!");
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }

    const handleSignUpWithGitHub = async (e) => {
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
            <div>
                <h2 className="text-white text-5xl my-4 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className={LABEL_STYLES}>First Name</label>
                        <input
                            className={INPUT_STYLE}
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className={LABEL_STYLES}>Last Name</label>
                        <input
                            className={INPUT_STYLE}
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className={LABEL_STYLES}>Email Address</label>
                        <input
                            className={INPUT_STYLE}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className={LABEL_STYLES}>Password</label>
                        <input className={INPUT_STYLE}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <button className={BUTTON_STYLE} type="submit">Sign Up</button>
                        <div className="my-4 flex items-center justify-center text-white">
                        <span className="border-b border-white w-1/5"></span>
                        <span className="mx-2">or</span>
                        <span className="border-b border-white w-1/5"></span>
                    </div>
                    <button className={BUTTON_STYLE} onClick={handleSignUpWithGitHub}>Sign In with GitHub</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;
