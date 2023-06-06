"use client";
import Image from "next/image";
import {
  Button,
  Grid,
  Stack,
  Checkbox,
  Container,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
function IntroImage() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Grid
      className="px-10"
      container
      height="80vh"
      alignItems="center"
      justifyContent="center"
      direction="row"
    >
      {/* Profile picture */}
      <Grid item container xs={6} alignItems="center" justifyContent="center">
        <div className="bg-white rounded-full flex justify-center p-3">
          <Image
            className="rounded-full"
            height={300}
            width={300}
            alt="profile picture"
            src={"/pfp.jfif"}
          />
        </div>
      </Grid>
      {/* Introductory text */}
      <Grid item xs={6}>
        <Stack>
          {/* Title */}
          <Typography
            noWrap
            variant="h4"
            sx={{
              color: "white",
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".1rem",
              textDecoration: "none",
            }}
          >
            Hej! Trevligt att träffas 👋
          </Typography>
          {/* Description */}
          <Typography
            paragraph
            variant="p"
            sx={{
              color: "white",
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: ".1rem",
              width: "70%",
            }}
          >
            Jag heter Brian och jag är en datateknik student på Chalmers
            universitet. Jag har programmerat sedan gymnasiet och skapat
            IoT-enheter och applikationer. Jag har fortsatt med programmering
            och lärt mig olika koncept som funktionell programmering,
            objektorienterad programmering, datastrukturer, parallell
            programmering osv. För tillfället lär jag mig Next.js och fullstack
            utveckling. Har dessutom programmerat i Python, JavaScript, C#, C++
            och Java.
          </Typography>
          {/* Buttons */}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default IntroImage;
