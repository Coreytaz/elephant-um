import React from "react";
import style from "./Header.module.scss";
import Logo from "../../assets/Logo.svg";
import { Button } from "..";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <img src={Logo} alt="logo" />
        <span>
          Слон<span>УМ</span>
        </span>
      </div>
      <div className={style.header__login}>
        <Button appearance="ghost" className={style.header__button}>Войти</Button>
      </div>
    </header>
  );
};

export default Header;
