import Hero from "./components/Hero";
import Nav from "./components/Nav";
import BusinessDescription from "./components/BusinessDescription";
import FindUs from "./components/FindUs";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <BusinessDescription />
      <FindUs />
    </>
  );
}
