"use client";
import React from "react";
import "./globals.css";
import { darkTheme, lightTheme } from "./theme/themes";
import NavBar from "./components/NavBar";

import { ThemeProvider, CssBaseline } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <NavBar />
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
