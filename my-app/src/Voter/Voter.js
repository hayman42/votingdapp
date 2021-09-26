import React, { Component } from "react";
import Login from "./Components/login";
import styles from "./Voter.module.css";

class Voter extends Component {
  render() {
    return (
      <div className={styles.button}>
        <span className={styles.text}>Nice React!</span>
        <Login>Cofirm</Login>
      </div>
    );
  }
}

export default Voter;
