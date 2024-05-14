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
      main: "#D918B9",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: "#ff8080",
    },
    info: {
      main: "#ffff80",
    },
    background: {
      default: "transparent",
      paper: "#fff"
    }, 
  },
  typography: {
    fontFamily: playfairDisplay.style.fontFamily,
    h1: {
      fontFamily: badScript.style.fontFamily,
      fontSize: "2em",
    },
    body1: {
      fontFamily: playfairDisplay.style.fontFamily,
      fontSize: "1.5em",
    },
    body2: {
      fontFamily: playfairDisplay.style.fontFamily,
      fontSize: "1em",
    },
    subtitle1: {
      fontFamily: badScript.style.fontFamily,
      fontSize: "1.5em",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          border: "1px solid black",
          borderRadius: 0,
          textDecoration: "uppercase",
          color: "#101218"
        }
      }
    }
  }
});

export default theme;
