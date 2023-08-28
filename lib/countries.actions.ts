export const getAllCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v2/all");

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getRegionCountries = async (region: string) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v2/region/${region}`
    );

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getCountryByCode = async (code: string) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v2/alpha/${code}`
    ).then((res) => res.json());

    return response;
  } catch (error) {
    throw error;
  }
};

export const getBordersNames = async (borders: string[]) => {
  const results: string[] = [];

  for (const border of borders)
    try {
      const response = await fetch(
        `https://restcountries.com/v2/alpha/${border}`
      );

      if (response.ok) {
        const country = await response.json();
        results.push(country.name);
      } else {
        throw new Error("Erreur de la requete");
      }
    } catch (error) {
      throw error;
    }
  return results;
};
