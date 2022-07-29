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

type HomeDarkProps = {
    setTheme: (value: string) => void
}

const HomeDark: React.FC<HomeDarkProps> = ({setTheme}) => {

  React.useEffect(() => {
    setTheme('dark')
  }, [])

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

export default HomeDark;
