import { useState, type FormEvent } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import P from "../P/P";
import styles from "./Subscribe.module.scss";

export default function Subscribe() {
  const [notice, setNotice] = useState("");
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("Подписка пока недоступна: сервис рассылки не подключён.");
  };

  return (
    <section className={styles.subscribe} id="subscribe" aria-labelledby="subscribe-title">
      <h2 id="subscribe-title">Подпишись на нашу рассылку</h2>
      <P size="px18">Обещаем присылать только самое важное<br />и интересное :)</P>
      <form className={styles.subscribe__form} onSubmit={onSubmit}>
        <label className={styles.subscribe__email}>Email
          <Input name="email" type="email" placeholder="Email" autoComplete="email" required />
        </label>
        <Button appearance="primary" type="submit">Отправить</Button>
        <label className={styles.checkbox}>
          <input type="checkbox" required />
          <span>Отправляя данные, я соглашаюсь с Условиями конкурса и Политикой обработки данных</span>
        </label>
        {notice && <p role="status" className={styles.notice}>{notice}</p>}
      </form>
    </section>
  );
}
