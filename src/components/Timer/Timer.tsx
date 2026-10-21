import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";

type TimerProps = { days: number; hours: number; minutes: number; seconds?: number };

function declension(num: number, forms: [string, string, string]) {
  const n = Math.abs(num) % 100;
  if (n >= 11 && n <= 14) return forms[2];
  const last = n % 10;
  return last === 1 ? forms[0] : last >= 2 && last <= 4 ? forms[1] : forms[2];
}

function TimerValue({ value }: { value: number }) {
  const [digits, setDigits] = useState<{ current: number; previous: number | null }>({ current: value, previous: null });

  if (digits.current !== value) {
    setDigits({ current: value, previous: digits.current });
  }

  return (
    <span className={styles.timer__number}>
      {digits.previous !== null && (
        <span key={`previous-${digits.previous}`} className={`${styles.timer__digit} ${styles.timer__digitLeaving}`}>
          {String(digits.previous).padStart(2, "0")}
        </span>
      )}
      <span key={digits.current} className={styles.timer__digit}>
        {String(digits.current).padStart(2, "0")}
      </span>
    </span>
  );
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
  const s = remaining % 60;

  return (
    <div className={styles.timer} role="timer" aria-live="off" aria-label={`Обратный отсчёт: ${d} ${declension(d, ["день", "дня", "дней"])}, ${h} ${declension(h, ["час", "часа", "часов"])}, ${m} ${declension(m, ["минута", "минуты", "минут"])}, ${s} ${declension(s, ["секунда", "секунды", "секунд"])}`}>
      <div className={styles.timer__items} aria-hidden="true">
        <div className={styles.timer__item}><TimerValue value={d} /><span>{declension(d, ["день", "дня", "дней"])}</span></div>
        <div className={styles.timer__item}><TimerValue value={h} /><span>{declension(h, ["час", "часа", "часов"])}</span><small>по МСК</small></div>
        <div className={styles.timer__item}><TimerValue value={m} /><span>{declension(m, ["минута", "минуты", "минут"])}</span></div>
        <div className={styles.timer__item}><TimerValue value={s} /><span>{declension(s, ["секунда", "секунды", "секунд"])}</span></div>
      </div>
    </div>
  );
}
