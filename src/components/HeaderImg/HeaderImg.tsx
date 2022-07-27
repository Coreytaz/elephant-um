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
        <img src={Space} alt="Space" className={styles.img__BGspace} />
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
