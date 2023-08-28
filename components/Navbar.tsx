"use client";

import Link from "next/link";
import DarkButton from "./dark_mode/DarkButton";

const Navbar = () => {
  return (
    <nav className="top-0 left-0 w-full bg-white dark:bg-slate-700 flex justify-between items-center min-h-[4.5em] px-3 md:px-10 lg:px-16 lg:py-8 2xl:px-28 shadow-lg ">
      <Link href="/">
        <h1 className="font-bold text-sm md:text-xl 2xl:text-2xl ">
          Where in the world ?
        </h1>
      </Link>
      <DarkButton />
    </nav>
  );
};

export default Navbar;
