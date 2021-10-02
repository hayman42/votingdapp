import React, { Fragment } from "react";
import styles from "./question.module.css";

import Header from "../commonComponents/header/header";
import MenuBar from "../commonComponents/menuBar/menuBar";

const Question = props => {
  return (
    <Fragment>
      <Header />
      <MenuBar />
      <h1 className={styles.contents}> Question </h1>
      <h2> {props.data} </h2>
    </Fragment>
  );
};

export default Question;
