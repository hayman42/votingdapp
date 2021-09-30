import React from "react";
import styles from "./question.module.css";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Question() {
  const history = useHistory();
  return (
    // Edit Question Page에서 Submit할 때마다 여기서 만들어지는 것은 안 되나?
    // 그러면 여기는 양식만 만들어주면 되겠다
    <section className={styles.question}>
      <h2 className={styles.number}>{/* edit에서 만든 number */}1. &nbsp;</h2>
      <h3 className={styles.content}>
        {/* edit에서 만든 질문 내용 */} 지지하고 계시는 정당은?
      </h3>
      <div className={styles.checkbox}>
        <Checkbox
          {...label}
          onClick={() => {
            history.push("/questionPage");
          }}
        />
      </div>
    </section>
  );
}

export default Question;
