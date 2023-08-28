import BackButton from "@/components/BackButton";
import Borders from "@/components/countries/Borders";
import { getCountryByCode } from "@/lib/countries.actions";
import Image from "next/image";

const page = async ({ params: { cca3 } }: { params: { cca3: string } }) => {
  const country = await getCountryByCode(cca3);

  return (
    <section className="mt-10 mx-10 pb-10">
      <BackButton />
      <div className="xl:flex xl:items-stretch xl:justify-start">
        <Image
          src={country?.flags.svg}
          height={400}
          width={400}
          alt="country flag"
          className="mt-16 xl:w-[40%] xl:ml-20"
        />

        <div className="xl:ml-32 xl:mt-20 xl:flex xl:items-center xl:flex-wrap">
          <div className="xl:flex xl:flex-col ">
            <h1 className="text-lg font-bold mt-8 mb-6 xl:text-3xl">
              {country.name}
            </h1>

            <div className="flex flex-col gap-2">
              <p>
                <span className="font-semibold">Native Name: </span>
                {country.nativeName}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {country.population.toLocaleString("en-US")}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-6 xl:ml-40">
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              {country.capital}
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {country.currencies.map((currency: any) => (
                <span>{`${currency.name} `}</span>
              ))}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {country.languages.map((lang: any) => (
                <span>{`${lang.name} `}</span>
              ))}
            </p>
          </div>

          {country.borders && <Borders borders={country.borders} />}
        </div>
      </div>
    </section>
  );
};

export default page;
