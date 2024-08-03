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
      //pink
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
    h2: {
      fontFamily: playfairDisplay.style.fontFamily,
      fontSize: "20px",
    },
    h6: {
      fontFamily: playfairDisplay.style.fontFamily,
      fontSize: "18px",
    },
    body1: {
      fontFamily: playfairDisplay.style.fontFamily,
      fontSize: "16px",
      lineHeight: "30px",
    },
    body2: {
      fontFamily: playfairDisplay.style.fontFamily,
      fontSize: "14px",
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
          backgroundColor: "#000000",
          border: "1px solid black",
          borderRadius: 4,
          textDecoration: "uppercase",
          color: "#fff",
          padding: ".5rem 1rem",
          filter: "drop-shadow(0 4px 4px rgba(0,0,0, .25))"
        }
      }
    }
  }
});

export default theme;
