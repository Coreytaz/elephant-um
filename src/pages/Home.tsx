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

type HomeProps = {
  setTheme: (value: string) => void;
};

const Home: React.FC<HomeProps> = ({ setTheme }) => {
  React.useEffect(() => {
    setTheme("light");
  }, []);
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
      </div>
      <PriceAndRegist />
      <div className="container">
        <Questions />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
