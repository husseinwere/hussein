"use client";

import { PaletteMode, createTheme, useMediaQuery } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<string | any>(null)

export default function ThemeContextProvider({ children }: { children: React.ReactNode}) {
  let preferredMode = typeof window !== "undefined" ? localStorage.getItem('theme') : null
  if(!preferredMode) {
    const darkMode = useMediaQuery("(prefers-color-scheme: dark)")
    preferredMode = darkMode ? 'dark' : 'light'
    typeof window !== "undefined" ? localStorage.setItem('theme', preferredMode) : null
  }
  const [mode, setMode] = useState(preferredMode)

  useEffect(() => {
    setMode(preferredMode)
  }, [preferredMode])

  const theme = createTheme({
    palette: {
      mode: mode as PaletteMode,
      primary: {
        main: '#ccc'
      }
    },
    typography: {
      fontSize: 12
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: preferredMode === 'light' ? '#333' : '#ddd'
          }
        }
      }
    }
  });

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}