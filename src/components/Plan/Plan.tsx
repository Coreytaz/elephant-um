import cn from "classnames";
import { useInView } from "../../hook/useInView";
import P from "../P/P";
import styles from "./Plan.module.scss";
import Sky from "./sky.svg";
import Step from "./step.svg";
import Plane from "./plane.svg";

export default function Plan() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section ref={ref} className={styles.plan} id="how-it-works" aria-labelledby="plan-title">
      <div className="container">
        <h2 className={styles.plan__title} id="plan-title">Пошаговый <span>план</span></h2>
        <div className={styles.plan__content}>
          <ol className={styles.plan__steps}>
            <li><P size="px20">Зарегистрируйтесь на конкурс <a href="#registration">Здесь</a></P></li>
            <li><P size="px20">Выполните все условия конкурса</P></li>
            <li><P size="px20">Загрузите рисунок <span className={styles.missingLink}>Здесь</span> или в Личном кабинете</P></li>
          </ol>
          <img className={styles.plan__route} src={Step} alt="" loading="lazy" decoding="async" width="1373" height="499" />
        </div>
      </div>
      <img className={cn(styles.plane, { [styles.animPlan]: inView })} src={Plane} alt="" aria-hidden="true" loading="lazy" />
      <img className={styles.sky} src={Sky} alt="" aria-hidden="true" loading="lazy" />
    </section>
  );
}
