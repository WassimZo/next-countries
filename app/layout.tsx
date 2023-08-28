import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { SearchContextProvider } from "@/context/search.context";
import { ThemeProvider } from "./themeProvider";

const nunito = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REST Countries",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-slate-50 dark:bg-slate-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <SearchContextProvider>{children}</SearchContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
