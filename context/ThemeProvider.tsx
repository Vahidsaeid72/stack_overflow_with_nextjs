"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {

  const [mode, setMode] = useState('dark');

  const handelThemeChange = () => {
    if((!('theme' in localStorage))){
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setMode('system')
        document.documentElement.classList.add("dark");
      }else{
        setMode('system')
        document.documentElement.classList.remove("dark");
      }
    }
    else if (localStorage.theme === "dark" ) {
      setMode('dark')
      document.documentElement.classList.add("dark");
    } else {
      setMode('light')
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handelThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
} 

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a themeProvider");
  }

  return context;
}
