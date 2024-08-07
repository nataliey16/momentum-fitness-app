"use client";
import React, { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

const LABEL_STYLES = "text-white text-lg my-4";
const INPUT_STYLE = "w-full p-4 mx-0 my-2 rounded-md border-2 border-[#293241]";

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
            alert("Sign-Up With GitHub Successful!");
        } catch (error) {
            console.error("Error signing up with GitHub:", error);
        }
    }

    return (
        <div>
            <div className="w-full max-w-md flex flex-col mt-10 ">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className={LABEL_STYLES}>First Name</label>
                        <input
                            className={INPUT_STYLE}
                            type="text"
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
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <button className="bg-[#e4c034] hover:bg-[#edd993] rounded-md p-4 w-full" type="submit">Sign Up</button>
                    <button onClick={handleSignUpWithGitHub} className="bg-[#e4c034] hover:bg-[#edd993] rounded-md p-4 w-full">Sign Up with GitHub</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;
