import React from "react";
import styles from "./Footer.module.scss";
import VK from "../../assets/vk2.svg";
import Telegram from "../../assets/Telegram.svg";
import YD from "../../assets/YD.svg";
import { P } from "..";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__smm}>
          <P size="px20">Наши соцсети:</P>
          <div className={styles.footer__smmButtons}>
            <img src={Telegram} alt="Telegram" />
            <img src={YD} alt="YD" />
            <img src={VK} alt="VK" />
          </div>
        </div>
        <nav className={styles.footer__links}>
          <a href="/">Главная</a>
          <a href="/">Личный кабинет</a>
          <a href="/">Контакты</a>
          <a href="/">Конфиденциальность</a>
        </nav>
        <a href="/" className={styles.footer__up}>
          <span></span>
        </a>
      </div>
      <div className={styles.footer__copiright}>
        <P size="px20">@ Все права защищены. ООО”Слонум” 2022</P>
      </div>
    </footer>
  );
};

export default Footer;
