"use client";

import { createTheme } from "@mui/material/styles";
import { Playfair_Display, Bad_Script } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

const badScript = Bad_Script({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#ED4D88",
    },
    secondary: {
      main: "#4DC8ED",
    },
    error: {
      main: "#ff8080",
    },
    info: {
      main: "#ffff80",
    }
  },
  typography: {
    fontFamily: playfairDisplay.style.fontFamily,
    h1: {
      fontFamily: badScript.style.fontFamily,
      fontSize: "3em",
    },
    body1: {
      fontFamily: playfairDisplay.style.fontFamily,
      fontWeight: "500",
      fontSize: "1.5em",
    },
  },
});

export default theme;
