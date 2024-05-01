import Image from "next/image";
import styles from "./page.module.css";
import { Box, Container, Typography } from "@mui/material";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

export default function Home() {
  return (
    // <main className={styles.main}>
      <>
      <Nav />
      <Hero />
      </>
    // </main>
  );
}
