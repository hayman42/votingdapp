import React, { Component } from "react";
import styles from "./Manager.module.css";

class Manager extends Component {
  render() {
    return (
      <div className={styles.button}>
        <span className={styles.text}>Hello World!</span>
      </div>
    );
  }
}

export default Manager;
