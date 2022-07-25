import React from "react";
import { P } from "..";
import style from "./Description.module.scss";

const Description: React.FC = () => {
  return (
    <section className={style.description}>
      <P size="px22" className={style.description__title}>
        Компания <b>СлонУм</b> – проводит конкурс для детей в котором могут
        участвовать ребята <span>всех возрастов!</span> Номинации в которых
        можно победить, есть возможность проявить себя во всех направлениях и
        даже <span>без художественных способностей.</span>
      </P>
    </section>
  );
};

export default Description;
