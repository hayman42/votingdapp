// 조건에 따라서,
// Controller에서 Votind Open 상태 + 다수의 선택이면 -> Voter Result(Win)
// Controller에서 Votind Open 상태 + 소수의 선택이면 -> Voter Result(Lose)
// Controller에서 Votind Close 상태 -> Voter Wait Page
// Wait, Result(Win), Result(Lose) 나눠서 페이지 나오게 할 수는 없나??
// 하나씩 다 만드는 것은 좀 아닌듯

import React from "react";
import BackButton from "../commonComponents/backButton/backButton";
import Header from "../commonComponents/header/header";
import styles from "./voter_result.module.css";

function Voter_result(props) {
  return (
    <div className={styles.result}>
      <Header />
      <h1 className={styles.win}>
        Congratuation!
        <br />
        You Win!
      </h1>
      <BackButton />
    </div>
  );
}

export default Voter_result;
