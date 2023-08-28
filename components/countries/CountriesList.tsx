"use client";

import { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { Country } from "@/common.types";
import { SearchContext } from "@/context/search.context";

const CountriesList = ({ countries }: { countries: any[] }) => {
  const [displayedCountries, setDisplayedCountries] = useState(countries);
  const { query } = useContext(SearchContext);
  useEffect(() => {
    if (query) {
      const filteredCountries = countries.filter(
        (country) =>
          country.name.toLowerCase().includes(query.toLocaleLowerCase()) ||
          country.nativeName.toLowerCase().includes(query.toLocaleLowerCase())
      );
      setDisplayedCountries(filteredCountries);
    } else {
      setDisplayedCountries(countries);
    }
  }, [query]);

  return (
    <section className="mt-20 w-full">
      <ul className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 auto-rows-[400px]">
        {displayedCountries.length &&
          displayedCountries.map((country: any) => (
            <CountryCard
              flag={country.flags.png}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital ? country.capital : ""}
              cca3={country.alpha3Code}
            />
          ))}
      </ul>
    </section>
  );
};

export default CountriesList;
