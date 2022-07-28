import React from "react";
import { P } from "..";
import { QuestionsItemProps } from "../Questions/Questions";
import styles from "./QuestionCard.module.scss";

const QuestionCard: React.FC<QuestionsItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.qaCard}>
      <div className={styles.qaCard__question}>
        <P size="px20">{question}</P>
        <button
          className={!isOpen ? "" : styles.cross}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>+</span>
        </button>
      </div>
      <div className={isOpen ? "" : styles.qaCard__answer_close}>
        <P>{answer}</P>
      </div>
    </div>
  );
};

export default QuestionCard;
