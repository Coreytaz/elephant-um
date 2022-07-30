import React from "react";
import style from "./Header.module.scss";
import Logo from "../../assets/Logo.svg";
import { Button } from "..";
import { Link } from "react-router-dom";
import { useTheme } from "../../hook/useTheme";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <img src={Logo} alt="logo" />
        <span>
          Слон<span>УМ</span>
        </span>
      </div>
      <Link to="/elephant-um/">
        <Button appearance="primary" onClick={() => changeTheme()}>
          Сменить тему
        </Button>
      </Link>
      <div className={style.header__login}>
        <Button appearance="ghost" className={style.header__button}>
          Войти
        </Button>
      </div>
    </header>
  );
};

export default Header;
