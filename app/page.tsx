import Hero from "./components/Hero";
import Nav from "./components/Nav";
import OwnerDescription from "./components/BusinessDescription";
import FindUs from "./components/FindUs";
import { Grid } from "@mui/material";
import Carousel from "./components/Carousel";
import BasicMasonry from "./components/BasicMasonary";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Grid container>
        <Grid item md={6}>
          <OwnerDescription />
        </Grid>
        <Grid item md={4}>
          <Carousel slides={[]} />
        </Grid>
        <Grid item md={2}>
          buttons
        </Grid>
      </Grid>
      <Grid container>
        <FindUs/>
      </Grid>
      <FindUs />
    </>
  );
}
