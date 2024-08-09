import React from "react";
import Link from "next/link";

const BUTTON_STYLES =
  "absolute top-3/4 hover:bg-[#71717a] hover:text-white left-1/2 transform -translate-x-1/2 -translate-y-[80%] bg-[#3f3f46] text-white px-10 py-4 rounded-full";

const Header = () => {
  return (
    <div className="h-screen w-full grid grid-cols-2 items-center">
      {" "}
      <div className="flex-1 bg-[#e4c034]">
        <h1 className="text-[#292524] text-9xl flex min-h-screen items-center justify-end p-0">
          Mome
        </h1>
      </div>
      <div className="flex-1 bg-[#292524] text-[#e4c034]">
        <h1 className="text-[#e4c034] text-9xl flex min-h-screen items-center justify-start p-0">
          ntum
        </h1>
      </div>
      <div>
        <h3 className="absolute inset-0 flex items-center justify-center text-3xl text-white mt-36">
          Fuel Your Fitness Journey
        </h3>{" "}
      </div>
      <Link href="/signup-page" className={BUTTON_STYLES}>
        Get Started
      </Link>
    </div>
  );
};

export default Header;
