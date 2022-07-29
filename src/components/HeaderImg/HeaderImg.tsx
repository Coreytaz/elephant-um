import React from "react";
import styles from "./HeaderImg.module.scss";
import Space from "../../assets/Header/space.svg";
import Stars from "../../assets/Header/space/stars.svg";
import Plane from "../../assets/Header/space/Plane.svg";
import Elephant from "../../assets/Header/space/Elephant.svg";
import Clock from "../../assets/Header/space/Clock.svg";
import Lamp from "../../assets/Header/space/Lamp.svg";
import Planet1 from "../../assets/Header/space/Planet1.svg";
import Planet2 from "../../assets/Header/space/Planet2.svg";
import Planet3 from "../../assets/Header/space/Planet3.svg";
import Atom from "../../assets/Header/space/Atom.svg";
import division from "../../assets/Header/space/division.svg";
import Plus from "../../assets/Header/space/Plus.svg";
import Palet from "../../assets/Header/space/Palet.svg";
import Rocket from "../../assets/Header/space/Rocket.svg";
import Balloon from "../../assets/Header/space/Balloon.svg";
import Girl from "../../assets/Header/girl/girl.svg";
import Pen from "../../assets/Header/girl/Pen.svg";

const HeaderImg: React.FC = () => {
  return (
    <div className={styles.img}>
      <div className={styles.img__space}>
        <svg
          width="864"
          height="693"
          viewBox="0 0 864 693"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M882 321.141V0H0C0 0 52.1973 53.8439 32.5038 128.6C12.8103 203.357 71.8907 356.956 136.134 377.869C200.376 398.781 163.284 471.134 222.364 554.063C281.636 636.993 306.492 575.457 338.039 593.004C351.232 600.215 356.777 641.56 398.458 633.147C428.859 626.897 459.26 610.311 470.158 615.84C481.056 621.368 487.557 693 487.557 693C487.557 693 551.035 671.607 564.419 649.973C577.803 628.339 652.37 562.236 651.032 465.365C650.649 433.155 667.475 399.503 746.249 427.146C825.023 454.548 882 414.887 882 321.141Z"
            fill="url(#paint0_linear_0_415)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_415"
              x1="552.5"
              y1="658.936"
              x2="209.096"
              y2="8.04762"
              gradientUnits="userSpaceOnUse"
            >
              <stop className={styles.fill_color1} />
              <stop offset="1" className={styles.fill_color2} />
            </linearGradient>
          </defs>
        </svg>

        <img className={styles.img__spaceStars} src={Stars} alt="Stars" />
        <img className={styles.img__spacePlane} src={Plane} alt="Plane" />
        <img
          className={styles.img__spaceElephant}
          src={Elephant}
          alt="Elephant"
        />
        <img className={styles.img__spaceClock} src={Clock} alt="Clock" />
        <img className={styles.img__spaceLamp} src={Lamp} alt="Lamp" />
        <img className={styles.img__spacePlanet1} src={Planet1} alt="Planet1" />
        <img className={styles.img__spacePlanet2} src={Planet2} alt="Planet2" />
        <img className={styles.img__spacePlanet3} src={Planet3} alt="Planet3" />
        <img className={styles.img__spaceAtom} src={Atom} alt="Atom" />
        <p className={styles.img__spaceZero}>0</p>
        <p className={styles.img__spaceSecond}>1</p>
        <img
          className={styles.img__spaceDivision}
          src={division}
          alt="Segmentation"
        />
        <img className={styles.img__spacePlus} src={Plus} alt="Plus" />
        <img className={styles.img__spacePalet} src={Palet} alt="Palet" />
        <img className={styles.img__spaceRocket} src={Rocket} alt="Rocket" />
        <img className={styles.img__spaceBalloon} src={Balloon} alt="Balloon" />
      </div>
      <div className={styles.img__Girl}>
        <img className={styles.img__Gir1} src={Girl} alt="Girl" />
        <img className={styles.img__GirlPen} src={Pen} alt="Pen" />
      </div>
    </div>
  );
};

export default HeaderImg;
