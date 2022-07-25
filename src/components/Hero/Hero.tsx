import React from "react";
import { Button, P, Timer } from "..";
import styles from "./Hero.module.scss";
import Bg from "../../assets/hero-bg.jpg";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className={styles.hero__bg}>
        <img src={Bg} alt="bg" />
      </div>
      <div className={styles.hero__content}>
        <P className={styles.hero__upTitle} size="px15">
          От компании СлонУМ
        </P>
        <h1 className={styles.hero__title}>
          Всероссийский конкурс Детского рисунка
        </h1>
        <P className={styles.hero__subtitle} size="px18">
          Учавствуйте в конкурсе и получайте призы в различных номинациях
          детского рисунка для всех возрастов
        </P>
        <div className={styles.hero__footer}>
          <Button appearance="primary">Учавствовать</Button>
          <Timer days={1} hours={9} minutes={43} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
