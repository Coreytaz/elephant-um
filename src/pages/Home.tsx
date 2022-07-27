import React from "react";
import {
  Advantage,
  Description,
  Footer,
  Header,
  Hero,
  Plan,
  PriceAndRegist,
  Questions,
  Sertificate,
  Subscribe,
} from "../components";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <Advantage />
      <Plan />
      <Sertificate />
      <PriceAndRegist />
      <Questions />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
