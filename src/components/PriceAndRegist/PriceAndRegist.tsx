import { useState, type FormEvent } from "react";
import cn from "classnames";
import { useInView } from "../../hook/useInView";
import styles from "./PriceAndRegist.module.scss";
import VK from "../../assets/vk2.svg";
import Ok from "../../assets/ok.svg";
import Plane from "../../assets/paperPlane.svg";
import Button from "../Button/Button";
import Input from "../Input/Input";
import P from "../P/P";

const unavailable = "Регистрация пока недоступна: сервер обработки заявок не подключён.";

export default function PriceAndRegist() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [notice, setNotice] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(unavailable);
  };

  const share = (provider: "vk" | "ok") => {
    const page = encodeURIComponent(window.location.href.split("#")[0]);
    const url = provider === "vk"
      ? `https://vk.com/share.php?url=${page}`
      : `https://connect.ok.ru/offer?url=${page}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.overflow} ref={ref}>
      <section className={styles.PriceAndRegist} id="registration" aria-labelledby="registration-title">
        <div className={styles.price}>
          <div className={styles.price__top}><P size="px20">Скидка за репост</P></div>
          <div className={styles.price__middle}>
            <P size="px20">Стоимость участия</P>
            <div className={styles.price__prices}><strong>149₽</strong><del>299₽</del></div>
            <P size="px20">При наличии репоста в соцсетях :)</P>
          </div>
          <div className={styles.price__bottom}>
            <P size="px20">Получить скидку:</P>
            <div className={styles.price__bottomButtons}>
              <button type="button" className={styles.price__buttonVK} onClick={() => share("vk")} aria-label="Поделиться страницей во ВКонтакте"><img src={VK} alt="" /></button>
              <button type="button" className={styles.price__buttonOK} onClick={() => share("ok")} aria-label="Поделиться страницей в Одноклассниках"><img src={Ok} alt="" /></button>
            </div>
          </div>
        </div>
        <form className={styles.regist} onSubmit={handleSubmit}>
          <h2 id="registration-title">Зарегистрируйтесь, чтобы участвовать</h2>
          <div className={styles.regist__inputs}>
            <label>ФИО ребёнка<Input name="childName" type="text" autoComplete="off" placeholder="ФИО ребёнка" maxLength={120} required /></label>
            <label>Дата рождения<Input name="birthDate" type="date" required max={new Date().toISOString().slice(0, 10)} /></label>
            <label>Город<Input name="city" type="text" autoComplete="address-level2" placeholder="Город" required maxLength={100} /></label>
            <label>Email<Input name="email" type="email" autoComplete="email" placeholder="Email" required /></label>
            <label>Пароль<Input name="password" type="password" autoComplete="new-password" placeholder="Пароль" required minLength={8} /></label>
          </div>
          <label className={styles.checkbox}>
            <input type="checkbox" required />
            <span>Отправляя данные, я соглашаюсь с Условиями конкурса и Политикой обработки данных</span>
          </label>
          <div className={styles.regist__btn}>
            <Button appearance="primary" type="submit">Участвовать</Button>
            <div className={styles.regist__plane} aria-hidden="true">
              <img className={cn(styles.regist__plane1, { [styles.planeOne]: inView })} src={Plane} alt="" />
              <img className={cn(styles.regist__plane2, { [styles.planeTwo]: inView })} src={Plane} alt="" />
            </div>
          </div>
          {notice && <p role="status" className={styles.notice}>{notice}</p>}
        </form>
      </section>
    </div>
  );
}
