import React from "react";
import styles from "./answer.module.css";
import Checkbox from "@mui/material/Checkbox";

import { useHistory } from "react-router";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Answer() {
  const history = useHistory();
  return (
    <div className={styles.answer}>
      <section className={styles.container}>
        <h2 className={styles.number}>{/* edit에서 만든 선택지 */}A. &nbsp;</h2>
        <h3 className={styles.content}>
          {/* edit에서 만든 정답 내용 */} 국민의힘
        </h3>
        <div className={styles.checkbox}>
          <Checkbox
            {...label}
            // 클릭했을 때,
            // 관련 정보가 managerResult로 넘어가서 집계되어야 한다.
            // Controller에서 Votind Open 상태 + 다수의 선택이면 -> Voter Result(Win)
            // Controller에서 Votind Open 상태 + 소수의 선택이면 -> Voter Result(Lose)
            // Controller에서 Votind Close 상태 -> Voter Wait Page

            onClick={() => {
              history.push("/voterResult");
            }}
          />
        </div>
      </section>
      <section className={styles.container}>
        <h2 className={styles.number}>{/* edit에서 만든 선택지 */}B. &nbsp;</h2>
        <h3 className={styles.content}>
          {/* edit에서 만든 정답 내용 */} 더불어민주당
        </h3>
        <div className={styles.checkbox}>
          <Checkbox
            {...label}
            onClick={() => {
              history.push("/voterResult");
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Answer;
