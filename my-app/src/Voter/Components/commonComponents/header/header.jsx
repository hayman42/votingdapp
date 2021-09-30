import React from "react";
import styles from "./header.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}> Welcome to the Voting dApp</h1>
  </header>
);

export default Header;
