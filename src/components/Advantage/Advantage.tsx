import P from "../P/P";
import styles from "./Advantage.module.scss";
import Star from "../../assets/star.svg";
import Winne from "../../assets/winne.svg";
import Certification from "../../assets/certification.svg";
import Gift from "../../assets/gift.svg";
import Mail from "../../assets/email.svg";
import Vk from "../../assets/vk.svg";
import Waves from "../../assets/waves.svg";

const items = [
  { title: "Шанс занять 1 место — в вашем городе и по всей России", img: Star },
  { title: "Развитие самостоятельности + свободное время для родителей ;)", img: Winne },
  { title: "Персональный диплом в разных номинациях каждому участнику", img: Certification },
  { title: "Призы и скидки для подписчиков и авторизованных пользователей", img: Gift },
  { title: "Бесплатный диплом на email — через 1 день после конкурса", img: Mail },
  { title: "Публикация работ победителей во ВКонтакте.", img: Vk, link: { title: "Подписывайтесь!", url: "https://vk.com" } },
];

export default function Advantage() {
  return (
    <section className={styles.advantage} aria-labelledby="advantages-title">
      <h2 className={styles.advantage__title} id="advantages-title">Для чего <span>нужно</span> участвовать</h2>
      <div className={styles.advantage__items}>
        {items.map(({ title, img, link }) => (
          <div className={styles.advantage__item} key={title}>
            <img src={img} alt="" width="106" height="94" loading="lazy" decoding="async" />
            <P size="px20">{title}{" "}{link && <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>}</P>
          </div>
        ))}
      </div>
      <img className={styles.advantage__waves} src={Waves} alt="" aria-hidden="true" loading="lazy" />
    </section>
  );
}
