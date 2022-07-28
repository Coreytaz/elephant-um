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
      <div className="container">
        <Header />
        <Hero />
        <Description />
        <Advantage />
      </div>
      <Plan />
      <div className="container">
        <Sertificate />
        <PriceAndRegist />
        <Questions />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
