import Hero from "./components/Hero";
import Nav from "./components/Nav";
import OwnerDescription from "./components/BusinessDescription";
import FindUs from "./components/FindUs";
import { Grid } from "@mui/material";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Grid container alignItems={"center"} justifyContent={"center"} rowGap={4}>
        <Grid item md={6}>
          <OwnerDescription />
        </Grid>
        <Grid item md={6}>
          {/* <Carousel/> */}
        </Grid>
        <Pricing/>
      </Grid>
      <br/>
      <br/>
      <FindUs />
    </>
  );
}
