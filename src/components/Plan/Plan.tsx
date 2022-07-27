import React from "react";
import { P } from "..";
import style from "./Plan.module.scss";
import Sky from "./sky.svg";
import Step from "./step.svg";
import Plane from "./plane.svg";

const Plan: React.FC = () => {
  return (
    <section className={style.plan}>
      <h2 className={style.plan__title}>
        Пошаговый <span>план</span>
      </h2>
      <div className={style.plan__content}>
        <div className={style.plan__content_step}>
          <ul>
            <li>
              <P size="px20">
                Зарегистрируйтесь на конкурс <a href="#">Здесь</a>
              </P>
            </li>
            <li>
              <P size="px20">
                Выполните все
                <br /> условия конкурса
              </P>
            </li>
            <li>
              <P size="px20">
                Загрузите рисунок <a href="#">Здесь</a> или в Личном кабинете
              </P>
            </li>
          </ul>
        </div>
        <img src={Step} alt="Step" />
      </div>
      <img className={style.plane} src={Plane} alt="plane" />
      <img className={style.sky} src={Sky} alt="sky" />
    </section>
  );
};

export default Plan;
