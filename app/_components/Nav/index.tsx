"use client";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import { useTheme, useMediaQuery } from "@mui/material";

const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile ? <MobileNav/> : <NavBar />;
};

export default Nav;
