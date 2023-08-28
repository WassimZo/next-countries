import Searchbar from "@/components/Searchbar";
import SelectRegion from "@/components/SelectRegion";
import CountriesList from "@/components/countries/CountriesList";
import { getRegionCountries } from "@/lib/countries.actions";

export default async function Home({
  params: { region },
}: {
  params: { region: string };
}) {
  const countries = await getRegionCountries(region);

  return (
    <main className="xl:mx-40 lg:mx-20">
      <div className="flex flex-col flex-nowrap gap-8 mx-2 mt-8 xl:mx-8 xl:flex-row xl:justify-between xl:items-end">
        <Searchbar />
        <SelectRegion value={region} />
      </div>
      <CountriesList countries={countries} />
    </main>
  );
}
