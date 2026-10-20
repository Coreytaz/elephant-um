import Button from "../Button/Button";
import HeaderImg from "../HeaderImg/HeaderImg";
import P from "../P/P";
import Timer from "../Timer/Timer";
import styles from "./Hero.module.scss";

export default function Hero() {
  const scrollToRegistration = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("registration")?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.hero__bg} aria-hidden="true"><HeaderImg /></div>
      <div className={styles.hero__content}>
        <P className={styles.hero__upTitle} size="px15">От компании СлонУМ</P>
        <h1 className={styles.hero__title} id="hero-title">Всероссийский конкурс Детского рисунка</h1>
        <P className={styles.hero__subtitle} size="px18">
          Учавствуйте в конкурсе и получайте призы в различных номинациях
          детского рисунка для всех возрастов
        </P>
        <div className={styles.hero__footer}>
          <Button appearance="primary" type="button" onClick={scrollToRegistration}>Участвовать</Button>
          <Timer days={1} hours={9} minutes={43} />
        </div>
      </div>
    </section>
  );
}
