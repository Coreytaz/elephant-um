import React from "react";
import { P } from "..";
import styles from "./Advantage.module.scss";
import Star from "../../assets/star.svg";
import Winne from "../../assets/winne.svg";
import Certification from "../../assets/certification.svg";
import Gift from "../../assets/gift.svg";
import Mail from "../../assets/email.svg";
import Vk from "../../assets/vk.svg";
import Waves from "../../assets/waves.svg";

const Advantage: React.FC = () => {
  const AdvantageItems = [
    {
      title: "Шанс занять 1 место — в вашем городе и по всей России",
      img: Star,
    },
    {
      title: "Развитие самостоятельности + свободное время для родителей ;)",
      img: Winne,
    },
    {
      title: "Персональный диплом в разных номинациях каждому участнику",
      img: Certification,
    },
    {
      title: "Призы и скидки для подписчиков и авторизованных пользователей",
      img: Gift,
    },
    {
      title: "Бесплатный диплом на email — через 1 день после конкурса",
      img: Mail,
    },
    {
      title: "Публикация работ победителей во ВКонтакте.",
      img: Vk,
      link: { title: "Подписывайтесь!", url: "https://vk.com" },
    },
  ];

  return (
    <section className={styles.advantage}>
      <h2 className={styles.advantage__title}>
        Для чего <span>нужно</span> участвовать
      </h2>
      <div className={styles.advantage__items}>
        {AdvantageItems.map((item, key) => (
          <div className={styles.advantage__item} key={key}>
            <img src={item.img} alt="star" />
            <P size="px20">
              {item.title}{" "}
              {item.link && (
                <a href={item.link.url} target="_blank" rel="noreferrer">
                  {item.link.title}
                </a>
              )}
            </P>
          </div>
        ))}
      </div>
      <img className={styles.advantage__waves} src={Waves} alt="Waves" />
    </section>
  );
};

export default Advantage;
