import React from "react";
import Answer from "../answer/answer";
import Header from "../commonComponents/header/header";
import Question from "./question";
import styles from "./question.module.css";

function QuestionPage() {
  return (
    <section className={styles.questionPage}>
      <Header />
      {/* API에서 가져온 데이터로 화면 구성 */}
      <Question />
      <Answer />
    </section>
  );
}

export default QuestionPage;
