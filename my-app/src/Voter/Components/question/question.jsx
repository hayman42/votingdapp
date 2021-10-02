import React, { Fragment } from "react";
import styles from "./question.module.css";
import Button from "@mui/material/Button";

const data = [
  "지지하고 계시는 정당은?",
  "가장 좋아하는 과일은?",
  "20대이십니까?",
  "대학생이십니까?",
];

export default function Question() {
  return (
    // Edit Question Page에서 Submit할 때마다 여기서 자동으로 만들어지게끔 만들자
    <section>
      {data.map((x, i) => (
        <Fragment>
          <div className={styles.question}>
            <Button
              variant="text"
              size="large"
              onClick={() => {
                // click -> 관련 질문 컴포넌트로 넘어가게끔
                alert("clicked");
              }}
            >
              {i + 1}. {x}
            </Button>
          </div>
        </Fragment>
      ))}
    </section>
  );
}
