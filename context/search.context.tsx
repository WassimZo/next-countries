"use client";

import { ChangeEvent, createContext, useState } from "react";

export const SearchContext = createContext<{
  query?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}>({ handleChange: () => null });

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const delay = setTimeout(() => {
      setQuery(e.target.value);
    }, 300);

    return () => clearTimeout(delay);
  };

  return (
    <SearchContext.Provider value={{ query, handleChange }}>
      {children}
    </SearchContext.Provider>
  );
};
