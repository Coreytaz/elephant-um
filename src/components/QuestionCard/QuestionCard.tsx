import P from "../P/P";
import styles from "./QuestionCard.module.scss";

type QuestionCardProps = { question: string; answer: string };

export default function QuestionCard({ question, answer }: QuestionCardProps) {
  return (
    <details className={styles.qaCard}>
      <summary className={styles.qaCard__question}>
        <span>{question}</span>
        <span className={styles.qaCard__toggle} aria-hidden="true">+</span>
      </summary>
      <div className={styles.qaCard__answer}><P size="px18">{answer}</P></div>
    </details>
  );
}
