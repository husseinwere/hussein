"use client";

import { PaletteMode, createTheme, useMediaQuery } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<string | any>(null)

export default function ThemeContextProvider({ children }: { children: React.ReactNode}) {
  let preferredMode = 'light'
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
            backgroundColor: "rgba(0, 0, 0, 0)"
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