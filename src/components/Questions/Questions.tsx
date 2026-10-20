import QuestionCard from "../QuestionCard/QuestionCard";
import styles from "./Questions.module.scss";

const questions = [
  "Может ли ребёнок заниматься самостоятельно?",
  "Как происходит оплата?",
  "Есть ли гарантии усвоения материала?",
  "С кем будет общаться мой ребёнок?",
  "Каковы принципы обучения?",
  "Сколько раз в неделю можно заниматься?",
];

export default function Questions() {
  return (
    <section className={styles.Questions} id="questions" aria-labelledby="questions-title">
      <h2 id="questions-title">Вопрос/Ответ</h2>
      {questions.map((question) => (
        <QuestionCard key={question} question={question} answer="Ответ на этот вопрос не опубликован на странице." />
      ))}
    </section>
  );
}
