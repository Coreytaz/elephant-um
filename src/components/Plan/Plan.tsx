import React from "react";
import { P } from "..";
import style from "./Plan.module.scss";
import Sky from "./sky.svg";
import Step from "./step.svg";
import Plane from "./plane.svg";
import cn from "classnames";

const Plan: React.FC = () => {
  const PlanRef = React.useRef<HTMLInputElement>(null!);
  const [anim, setAnim] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (showPlan_onscroll()) setAnim(true);
    });
  }, []);

  function showPlan_onscroll() {
    let wt = window.scrollY;
    let wh = document.body.clientHeight;
    let eh = PlanRef.current?.offsetHeight;
    let et = PlanRef.current?.offsetTop;

    if (wh - wt < et + eh * 4.5) return true;
  }

  return (
    <section ref={PlanRef} className={style.plan}>
      <h2 className={style.plan__title}>
        Пошаговый <span>план</span>
      </h2>
      <div className={style.plan__content}>
        <div className={style.plan__content_step}>
          <ul>
            <li
              className={cn({
                [style.animstep]: anim === true,
              })}
            >
              <P size="px20">
                Зарегистрируйтесь на конкурс <a href="#">Здесь</a>
              </P>
            </li>
            <li
              className={cn({
                [style.animstep2]: anim === true,
              })}
            >
              <P size="px20">
                Выполните все
                <br /> условия конкурса
              </P>
            </li>
            <li
              className={cn({
                [style.animstep3]: anim === true,
              })}
            >
              <P size="px20">
                Загрузите рисунок <a href="#">Здесь</a> или в Личном кабинете
              </P>
            </li>
          </ul>
        </div>
        <img src={Step} alt="Step" />
      </div>
      <img
        className={cn(style.plane, {
          [style.animPlan]: anim === true,
        })}
        src={Plane}
        alt="plane"
      />
      <img className={style.sky} src={Sky} alt="sky" />
    </section>
  );
};

export default Plan;
