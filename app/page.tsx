import Hero from "./components/Hero";
import Nav from "./components/Nav";
import OwnerDescription from "./components/BusinessDescription";
import FindUs from "./components/FindUs";
import { Button, Grid, Stack } from "@mui/material";
import Carousel from "./components/Carousel";

export default function Home() {
  const buttonArray = ["Single Bracelets", "Bracelets Sets", "Featured Bracelets", "Contact Me"]

  return (
    <>
      <Nav />
      <Hero />
      <Grid container alignItems={"center"} justifyContent={"center"} rowGap={2}>
        <Grid item md={4}>
          <OwnerDescription />
        </Grid>
        <Grid item md={4}>
          <Carousel/>
        </Grid>
        <Grid item md={4}>
          {buttonArray.map((item, index) => (
            <Stack margin={2} key={index}>
              <Button>{item}</Button>
            </Stack>
          ))}
        </Grid>
      </Grid>
      <FindUs />
    </>
  );
}
