import styles from "./Footer.module.scss";
import VK from "../../assets/vk2.svg";
import Telegram from "../../assets/Telegram.svg";
import YD from "../../assets/YD.svg";
import P from "../P/P";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.footer__content}>
        <div className={styles.footer__smm}>
          <P size="px20">Наши соцсети:</P>
          <div className={styles.footer__smmButtons} aria-label="Иконки социальных сетей (адреса не предоставлены)">
            <img src={Telegram} width="35" height="35" alt="Telegram" loading="lazy" />
            <img src={YD} width="35" height="35" alt="Яндекс Дзен" loading="lazy" />
            <img src={VK} width="35" height="35" alt="ВКонтакте" loading="lazy" />
          </div>
        </div>
        <nav className={styles.footer__links} aria-label="Навигация в подвале">
          <a href="#top">Главная</a>
          <span title="Страница отсутствует">Личный кабинет</span>
          <span title="Контактные данные не предоставлены">Контакты</span>
          <span title="Документ не предоставлен">Конфиденциальность</span>
        </nav>
        <a href="#top" className={styles.footer__up} aria-label="Наверх"><span aria-hidden="true" /></a>
      </div>
      <div className={styles.footer__copiright}><P size="px20">@ Все права защищены. ООО”Слонум” 2022</P></div>
    </footer>
  );
}
