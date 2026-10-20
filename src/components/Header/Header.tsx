import { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/Logo.svg";
import Button from "../Button/Button";
import { useTheme } from "../../hook/useTheme";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [loginNotice, setLoginNotice] = useState(false);

  return (
    <header className={styles.header}>
      <a className={styles.header__logo} href="#top" aria-label="СлонУМ — к началу страницы">
        <img src={Logo} width="53" height="54" alt="" />
        <span>Слон<span>УМ</span></span>
      </a>
      <div className={styles.header__actions}>
        <Button appearance="primary" type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-pressed={theme === "dark"}>
          Сменить тему
        </Button>
        <Button appearance="ghost" type="button" onClick={() => setLoginNotice((value) => !value)} aria-expanded={loginNotice}>
          Войти
        </Button>
      </div>
      {loginNotice && (
        <p className={styles.header__notice} role="status">Вход в личный кабинет недоступен: в проекте отсутствует страница авторизации.</p>
      )}
    </header>
  );
}
