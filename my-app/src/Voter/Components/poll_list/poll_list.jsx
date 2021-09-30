import React from "react";
import Header from "../header.jsx/header";
import Question from "../question/question";
import styles from "./poll_list.module.css";

export default function Poll_list() {
  return (
    <section className={styles.pollList}>
      <Header />
      <h1 className={styles.contents}> Poll List </h1>
      <Question />
    </section>
  );
}
