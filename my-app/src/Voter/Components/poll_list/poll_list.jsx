import React from "react";
import Header from "../login/header";
import styles from "./poll_list.module.css";

export default function Poll_list() {
  return (
    <section className="pollList">
      <Header />
      <h1 className={styles.contents}> Poll List</h1>
    </section>
  );
}
