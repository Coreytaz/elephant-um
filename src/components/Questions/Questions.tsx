import React from "react";
import { QuestionCard } from "..";
import styles from "./Questions.module.scss";

export type QuestionsItemProps = {
  question: string;
  answer: string;
};

const Questions: React.FC = () => {
  const QuestionsItem = [
    {
      question: "Может ли ребёнок заниматься самостоятельно?",
      answer: "...",
    },
    {
      question: "Как происходит оплата?",
      answer: "...",
    },
    {
      question: "Есть ли гарантии усвоения материала?",
      answer: "...",
    },
    {
      question: "С кем будет общаться мой ребёнок?",
      answer: "...",
    },
    {
      question: "Каковы принципы обучения?",
      answer: "...",
    },
    {
      question: "Сколько раз в неделю можно заниматься?",
      answer: "...",
    },
  ];

  return (
    <section className={styles.Questions}>
      <h2>Вопрос/Ответ</h2>
      {QuestionsItem.map((item, index) => (
        <QuestionCard
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </section>
  );
};

export default Questions;
