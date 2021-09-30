import React from "react";
import Answer from "../answer/answer";
import Header from "../commonComponents/header/header";
import Question from "./question";
import styles from "./question.module.css";

function QuestionPage() {
  return (
    <section className={styles.questionPage}>
      <Header />
      <Question />
      <Answer />
    </section>
  );
}

export default QuestionPage;
