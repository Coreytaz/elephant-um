import {
  Advantage, Description, Footer, Header, Hero, Plan,
  PriceAndRegist, Questions, Sertificate, Subscribe,
} from "../components";

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Перейти к содержимому</a>
      <div className="container"><Header /></div>
      <main id="main-content">
        <div className="container"><Hero /><Description /><Advantage /></div>
        <Plan />
        <div className="container"><Sertificate /></div>
        <PriceAndRegist />
        <div className="container"><Questions /><Subscribe /></div>
      </main>
      <div className="container"><Footer /></div>
    </div>
  );
}
