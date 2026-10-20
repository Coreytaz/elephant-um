import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";

type TimerProps = { days: number; hours: number; minutes: number; seconds?: number };

function declension(num: number, forms: [string, string, string]) {
  const n = Math.abs(num) % 100;
  if (n >= 11 && n <= 14) return forms[2];
  const last = n % 10;
  return last === 1 ? forms[0] : last >= 2 && last <= 4 ? forms[1] : forms[2];
}

export default function Timer({ days, hours, minutes, seconds = 59 }: TimerProps) {
  const duration = Math.max(0, ((days * 24 + hours) * 60 + minutes) * 60 + seconds);
  const [remaining, setRemaining] = useState(duration);

  useEffect(() => {
    const expiresAt = Date.now() + duration * 1000;
    const interval = window.setInterval(() => {
      setRemaining(Math.max(0, Math.ceil((expiresAt - Date.now()) / 1000)));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [duration]);

  const d = Math.floor(remaining / 86400);
  const h = Math.floor(remaining / 3600) % 24;
  const m = Math.floor(remaining / 60) % 60;

  return (
    <div className={styles.timer} role="timer" aria-live="off" aria-label={`Обратный отсчёт: ${d} ${declension(d, ["день", "дня", "дней"])}, ${h} ${declension(h, ["час", "часа", "часов"])}, ${m} ${declension(m, ["минута", "минуты", "минут"])}`}>
      <div className={styles.timer__items} aria-hidden="true">
        <div className={styles.timer__item}><span>{String(d).padStart(2, "0")}</span><span>{declension(d, ["день", "дня", "дней"])}</span></div>
        <div className={styles.timer__item}><span>{String(h).padStart(2, "0")}</span><span>{declension(h, ["час", "часа", "часов"])}</span><small>по МСК</small></div>
        <div className={styles.timer__item}><span>{String(m).padStart(2, "0")}</span><span>{declension(m, ["минута", "минуты", "минут"])}</span></div>
      </div>
    </div>
  );
}
