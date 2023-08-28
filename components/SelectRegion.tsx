"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function capitalizeWords(inputString: string) {
  return inputString.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

const SelectRegion = ({ value }: { value?: string | null }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="w-60 mx-4 relative">
      <button
        onClick={toggleMenu}
        className="bg-white dark:bg-slate-700 px-6 py-4  rounded-lg shadow-md flex justify-between w-full font-semibold items-center"
      >
        {value ? capitalizeWords(value) : "Filter by Region"}
        <Image
          src="/chevron-down.svg"
          alt="chevron down"
          width={12}
          height={12}
        />
      </button>

      {openMenu && (
        <div className="absolute top-16  w-60 bg-white dark:bg-slate-700 rounded-lg flex flex-col items-start gap-2 pl-4 py-6 z-50">
          {regions.map((region) => {
            if (value !== region.toLocaleLowerCase()) {
              return (
                <Link
                  href={`/regions/${region.toLocaleLowerCase()}`}
                  className="font-semibold"
                >
                  {region}
                </Link>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default SelectRegion;
