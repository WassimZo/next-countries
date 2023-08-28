import { Country } from "@/common.types";
import Image from "next/image";
import Link from "next/link";

const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital,
  cca3,
}: Country) => {
  return (
    <li className="relative bg-white dark:bg-slate-700 flex flex-col gap-5 rounded-lg mx-auto shadow-lg cursor-pointer">
      <Link href={`/country/${cca3}`}>
        <Image
          src={flag}
          width={300}
          height={100}
          alt="Country Flag"
          className="rounded-t-lg"
        />
        <div className="pl-6 mt-6">
          <h1 className="text-xl font-bold mb-2">{name}</h1>
          <p>
            <span className="font-semibold">Population: </span>
            {population.toLocaleString("en-US")}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default CountryCard;
