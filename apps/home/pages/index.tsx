import type { NextPage } from "next";
import Middle from "../components/about/About";
import Hero from "../components/hero/hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Middle />
    </>
  );
};

export default Home;
