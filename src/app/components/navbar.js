import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="lg:fixed w-full top-0  px-10 z-50 sm:mt-6">
      <div className="flex py-4 px-10 justify-between items-center text-lg  font-bold text-white">
        <Link href="/">Momentum</Link>
        <Link href="/tracker">Track Your Workout</Link>

        <button>Sign in</button>
      </div>
    </header>
  );
};

export default Navbar;
