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
      className="px-10 pt-24        "
      container
      height="80vh"
      alignItems="center"
      justifyContent="center"
      direction="row"
      maxWidth={2000}
    >
      {/* Profile picture */}
      <Grid
        item
        container
        md={6}
        xs={12}
        alignItems="center"
        justifyContent="center"
      >
        <div className="bg-white rounded-full flex justify-center p-3 drop-shadow-md">
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
      <Grid item md={6} xs={12}>
        <Stack spacing={3}>
          {/* Title */}
          <Typography
            noWrap
            variant="h4"
            sx={{
              color: "white",
              fontFamily: "monospace",
              fontWeight: 550,
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
              width: "100%",
              opacity: "0.9",
            }}
          >
            Jag heter <span className="font-bold">Brian</span> och jag är en{" "}
            <span className="font-bold">datateknik</span> student på{" "}
            <span className="font-bold">Chalmers Tekniska Högskola</span>. Jag
            har programmerat sedan gymnasiet och skapat IoT-enheter och
            applikationer. Jag fortsatt med programmering och lärt mig olika
            koncept som funktionell programmering, objektorienterad
            programmering, datastrukturer, parallell programmering osv. För
            tillfället lär jag mig Next.js och fullstack utveckling. Har
            dessutom programmerat i Python, JavaScript, C#, C++ och Java.
          </Typography>
          {/* Buttons */}
          <Button
            fullWidth={false}
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              color: "white",
              fontFamily: "monospace",
              letterSpacing: ".1rem",
              width: "150px",
              opacity: "0.9",
              borderRadius: 50,
            }}
          >
            View CV
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default IntroImage;
