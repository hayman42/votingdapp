import React, { Component } from "react";
import styles from "./Voter.module.css";

class Voter extends Component {
  render() {
    return (
      <div className={styles.button}>
        <span className={styles.text}>Nice React!</span>
      </div>
    );
  }
}

export default Voter;
