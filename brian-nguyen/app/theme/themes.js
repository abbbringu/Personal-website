"use client";

import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    black: {
      main: '#141a29',
      dark: '#141a29',
    },
  },
});


export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});