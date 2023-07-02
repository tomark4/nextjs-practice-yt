"use client";

import { ReactNode, createContext, useState } from "react";

type Mode = "light" | "dark";

interface ThemeContextI {
  mode: Mode;
  toggle: () => void;
}

export const ThemeContext = createContext({} as ThemeContextI);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={["theme", mode].join(" ")}>{children}</div>
    </ThemeContext.Provider>
  );
};
