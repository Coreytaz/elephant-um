import React from "react";
import styles from "./Timer.module.scss";
import sn from "classnames";

type TimerProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Timer: React.FC<TimerProps> = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}) => {
  const [[d, h, m, s], setTime] = React.useState([
    days,
    hours,
    minutes,
    seconds,
  ]);
  const [over, setOver] = React.useState(false);
  const [point, setPoint] = React.useState(false);

  //   const deadline = new Date(
  //     Date.now() + 3600 * 1000 * 24 + 3600 * 1000 * 9 + 2580 * 1000
  //   );
  //   console.log(deadline);

  function declensionNum(num: number, words: string[]) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }

  const tick = () => {
    if (over) return;

    if (h === 0 && m === 0 && s === 0 && d === 0) {
      setOver(true);
    } else if (h === 0 && m === 0) {
      setTime([d - 1, 23, 59, 59]);
    } else if (m === 0 && s === 0) {
      setTime([d, h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([d, h, m - 1, 59]);
    } else {
      setTime([d, h, m, s - 1]);
      setPoint(!point);
    }
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className={styles.timer}>
      <div className={styles.timer__items}>
        <div className={sn(styles.timer__item, styles.timer__days)}>
          <span>{d.toString().padStart(2, "0")}</span>
          <span>{declensionNum(d, ['день', 'дня', 'дней'])}</span>
          <div
            className={sn(styles.point, {
              [styles.opasity]: point === true,
            })}
          >
            :
          </div>
        </div>
        <div className={sn(styles.timer__item, styles.timer__hours)}>
          <span>{h.toString().padStart(2, "0")}</span>
          <span>{declensionNum(h, ['час', 'часа', 'часов'])}</span>
          <div
            className={sn(styles.point, {
              [styles.opasity]: point === true,
            })}
          >
            :
          </div>
        </div>
        <div className={sn(styles.timer__item, styles.timer__minutes)}>
          <span>{m.toString().padStart(2, "0")}</span>
          <span>{declensionNum(m, ['минута', 'минуты', 'минут'])}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
