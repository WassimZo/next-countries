"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const DarkButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      className="flex flex-row items-center"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <Image
        src={theme === "light" ? "/moon.svg" : "/sun.svg"}
        width={15}
        height={15}
        alt="moon icon"
      />
      <span className="ml-1 text-xs font-semibold lg:text-sm 2xl:text-lg">
        {theme === "light" ? "Dark" : "Light"} Mode
      </span>
    </button>
  );
};

export default DarkButton;
