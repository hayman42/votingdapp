import React, { Fragment } from "react";
import styles from "./question.module.css";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const data = [
  "지지하고 계시는 정당은?",
  "가장 좋아하는 과일은?",
  "20대이십니까?",
  "대학생이십니까?",
];

export default function Question() {
  const history = useHistory();

  return (
    // Edit Question Page에서 Submit할 때마다 여기서 자동으로 만들어지게끔 만들자
    <section>
      {data.map((x, i) => (
        <Fragment>
          <div className={styles.question}>
            <h2 className={styles.number}>{i + 1}. &nbsp;</h2>
            <h3 className={styles.content}> {x}</h3>
          </div>
        </Fragment>
      ))}
    </section>
  );
}
