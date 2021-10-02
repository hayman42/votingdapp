import React, { Fragment } from "react";

import MenuBar from "../commonComponents/menuBar/menuBar";
import Header from "../commonComponents/header/header";
// import Question from "../question/question";

import styles from "./poll_list.module.css";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

import { useHistory } from "react-router";

// Poll List에서 받아온 data를 여기에 저장
const data = [
  "지지하고 있는 정당은?",
  "20대이신가요?",
  "대학생이신가요?",
  "좋아하는 과일은?",
];

export default function Poll_list() {
  const history = useHistory();

  return (
    <Container>
      <Header />
      <MenuBar />
      <h1 className={styles.contents}> Poll List </h1>

      <div className={styles.list}>
        {data.map((x, i) => (
          <Fragment>
            <div className={styles.question}>
              <Button
                variant="text"
                size="large"
                onClick={() => {
                  history.push("/question");
                }}
              >
                {i + 1}. {x}
              </Button>
            </div>
          </Fragment>
        ))}
      </div>
    </Container>
  );
}
