import React, { Fragment } from "react";
import styles from "./question.module.css";

import Header from "../commonComponents/header/header";
import MenuBar from "../commonComponents/menuBar/menuBar";

const Question = () => {
  return (
    <Fragment>
      <Header />
      <MenuBar />
      <h1 className={styles.contents}> Question </h1>
      {/* 전 component에서 클릭한 data.x[1]이 들어오면 좋겠다 */}
      <h2> Q. </h2>
    </Fragment>
  );
};

export default Question;
