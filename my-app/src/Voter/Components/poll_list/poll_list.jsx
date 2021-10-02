import { Container } from "@mui/material";
import React from "react";
import Header from "../commonComponents/header/header";
import Question from "../question/question";
import styles from "./poll_list.module.css";

export default function Poll_list() {
  return (
    <Container>
      <Header />
      <h1 className={styles.contents}> Poll List </h1>
      <div className={styles.list}>
        <Question />
      </div>
    </Container>
  );
}
