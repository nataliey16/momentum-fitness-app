"use client";

import React from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      alert("Sign-Out Successful!");
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <header className="lg:fixed w-full top-0  px-10 z-50 sm:mt-6">
      <div className="flex py-4 px-10 justify-between items-center text-lg  font-bold text-white">
        <Link href="/">Momentum</Link>
        <span className="flex flex-row gap-6">
          <Link href="/tracker">Track Your Workout</Link>
          {user ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <Link href="/signup-page">Sign In</Link>
          )}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
