import Hero from "./components/Hero";
import Nav from "./components/Nav";
import OwnerDescription from "./components/OwnerDescription";
import FindUs from "./components/FindUs";
import { Grid, Link, Stack } from "@mui/material";
import Pricing from "./components/Pricing";
import InstagramIcon from "@mui/icons-material/Instagram";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <Nav />
      <br />
      <br />
      <Hero />
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        rowGap={4}
      >
        <Grid item md={6}>
          <OwnerDescription />
        </Grid>
        <Grid item md={6}>
          <Carousel />
        </Grid>
        <Pricing />
      </Grid>
      <br />
      <br />
      <FindUs />
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
        <Link
          href="https://www.instagram.com/vibinbeadsbybb/"
          color="primary"
          underline="none"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon fontSize="large" />
        </Link>
      </Stack>
      <br />
      <br />
    </>
  );
}
