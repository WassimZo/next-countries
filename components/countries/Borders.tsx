import { getBordersNames } from "@/lib/countries.actions";
import Link from "next/link";
import React from "react";

const Borders = async ({ borders }: { borders: string[] }) => {
  const borderNames =
    borders.length > 0 ? await getBordersNames(borders) : undefined;

  return (
    <div className="mt-6">
      <h1 className="text-lg font-semibold mb-6">Border Countries: </h1>
      <div className=" flex flex-wrap gap-2 flex-row pb-20 xl:pb-0">
        {borderNames &&
          borderNames.map((border, index) => (
            <Link href={`/country/${borders[index]}`}>
              <div
                key={border}
                className="bg-white dark:bg-slate-700 shadow-md px-4 py-2 flex items-center justify-center"
              >
                <h1>{border}</h1>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Borders;
