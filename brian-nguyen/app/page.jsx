"use client";

import { Button, Grid, Stack, Checkbox, Container } from "@mui/material";

import IntroImage from "./components/MainPage/IntroImage";

export default function Home() {
  return (
    <Container
      maxWidth="false"
      sx={{
        background: `rgb(13,24,42)`,
        background: ` linear-gradient(50deg, rgba(13,24,42,1) 0%, rgba(9,9,121,1) 37%, rgba(184,0,255,1) 100%)`,
        height: `100vh`,
      }}
    >
      <IntroImage />
      {/* */}
    </Container>
  );
}
