import React from "react";
import style from "./PriceAndRegist.module.scss";
import VK from "../../assets/vk2.svg";
import Ok from "../../assets/ok.svg";
import Plane from "../../assets/paperPlane.svg";
import { Button, Input, P } from "..";

const PriceAndRegist: React.FC = () => {
  const price = {
    price: 299,
    discount: 149,
  };
  return (
    <section className={style.PriceAndRegist}>
      <div className={style.price}>
        <div className={style.price__top}>
          <P size="px20">Скидка за репост</P>
        </div>
        <div className={style.price__middle}>
          <P size="px20">Стоимость участия</P>
          <div className={style.price__prices}>
            <P size="px20">
              {price.discount}
              {"₽"}
            </P>
            <p>
              {price.price}
              {"₽"}
            </p>
          </div>
          <P size="px20">При наличии репоста в соцсетях :)</P>
        </div>
        <div className={style.price__bottom}>
          <P size="px20">Получить скидку:</P>
          <div className={style.price__bottomButtons}>
            <button className={style.price__buttonVK}>
              <img src={VK} alt="vk" />
            </button>
            <button className={style.price__buttonOK}>
              <img src={Ok} alt="ok" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.regist}>
        <h2>Зарегистрируйтесь, чтобы участвовать</h2>
        <div className={style.regist__inputs}>
          <Input type="text" placeholder="ФИО ребёнка" />
          <Input type="text" placeholder="Дата рождения" />
          <Input type="text" placeholder="Город" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Пароль" />
        </div>
        <div className={style.checkbox}>
          <input type="checkbox" />
          <P size="px15">
            Отправляя данные, я соглашаюсь с<a href="/"> Условиями конкурса</a>{" "}
            и<a href="/"> Политикой обработки данных</a>
          </P>
        </div>
        <div className={style.regist__btn}>
          <Button appearance="primary">Участвовать</Button>
          <img src={Plane} alt="Plane" />
        </div>
      </div>
    </section>
  );
};

export default PriceAndRegist;
