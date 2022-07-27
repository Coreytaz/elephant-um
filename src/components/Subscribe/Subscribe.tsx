import React from "react";
import { Button, Input } from "..";
import P from "../P/P";
import styles from "./Subscribe.module.scss";

const Subscribe: React.FC = () => {
  return (
    <section className={styles.subscribe}>
      <h2>Подпишись на нашу рассылку</h2>
      <P size="px18">
        Обещаем присылать только самое важное
        <br></br>и интересное :)
      </P>
      <div className={styles.subscribe__form}>
        <Input type="email" placeholder="Email" />
        <Button appearance="primary">Отправить</Button>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" />
        <P size="px15">
          Отправляя данные, я соглашаюсь с<a href="/"> Условиями конкурса</a>
          <br></br>и <a href="/"> Политикой обработки данных</a>
        </P>
      </div>
    </section>
  );
};

export default Subscribe;
