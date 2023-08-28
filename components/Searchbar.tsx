"use client";

import Image from "next/image";
import { SearchContext } from "@/context/search.context";
import { useContext } from "react";

const Searchbar = () => {
  const { handleChange } = useContext(SearchContext);

  return (
    <form className="mt-8 py-4 mx-4 max-w-2xl rounded-lg flex items-center bg-white dark:bg-slate-700 shadow-md xl:w-full">
      <button
        type="submit"
        className="py-2 px-4 flex justify-center items-center"
      >
        <Image src="/search.svg" alt="search icon" width={18} height={18} />
      </button>
      <input
        type="text"
        placeholder="Search for a country..."
        className="outline-none w-full dark:bg-slate-700"
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default Searchbar;
