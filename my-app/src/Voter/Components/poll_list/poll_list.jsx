import { Container } from "@mui/material";
import React, { Fragment } from "react";
import Header from "../commonComponents/header/header";
import styles from "./poll_list.module.css";
import Button from "@mui/material/Button";

// Poll List에서 받아온 data를 여기에 저장
const data = [
  "지지하고 계시는 정당은?",
  "가장 좋아하는 과일은?",
  "20대이십니까?",
  "대학생이십니까?",
];

export default function Poll_list() {
  return (
    <Container>
      <Header />
      <h1 className={styles.contents}> Poll List </h1>
      <div className={styles.list}>
        {data.map((x, i) => (
          <Fragment>
            <div className={styles.question}>
              <Button variant="text" size="large">
                {i + 1}. {x}
              </Button>
            </div>
          </Fragment>
        ))}
      </div>
    </Container>
  );
}
