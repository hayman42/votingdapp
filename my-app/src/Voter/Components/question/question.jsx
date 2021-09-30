import React, { Fragment } from "react";
import styles from "./question.module.css";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const data = [
  "지지하고 계시는 정당은?",
  "가장 좋아하는 과일은?",
  "20대이십니까?",
];

function Question() {
  const history = useHistory();
  return (
    // Edit Question Page에서 Submit할 때마다 여기서 만들어지는 것은 안 되나?
    // 그러면 여기는 양식만 만들어주면 되겠다
    <section className={styles.question}>
      {data.map((x, i) => (
        <Fragment>
          <h2 className={styles.number}>
            {/* edit에서 만든 number */}
            {i + 1}. &nbsp;
          </h2>
          <h3 className={styles.content}>
            {/* edit에서 만든 질문 내용 */} {x}
          </h3>
          <div className={styles.checkbox}>
            <Checkbox
              {...label}
              onClick={() => {
                history.push("/questionPage");
              }}
            />
          </div>
        </Fragment>
      ))}
    </section>
  );
}

export default Question;
