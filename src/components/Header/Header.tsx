import React from "react";
import style from "./Header.module.scss";
import Logo from "../../assets/Logo.svg";
import { Button } from "..";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  let location = useLocation();
  console.log(location);

  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <img src={Logo} alt="logo" />
        <span>
          Слон<span>УМ</span>
        </span>
      </div>
      {location.pathname === "/elephant-um/dark" && (
        <Link to="/elephant-um">
          <Button appearance="primary">Сменить тему</Button>
        </Link>
      )}
      {location.pathname === "/elephant-um" && (
        <Link to="/elephant-um/dark">
          <Button appearance="primary">Сменить тему</Button>
        </Link>
      )}
      <div className={style.header__login}>
        <Button appearance="ghost" className={style.header__button}>
          Войти
        </Button>
      </div>
    </header>
  );
};

export default Header;
