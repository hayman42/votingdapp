import { Container } from "@mui/material";
import React from "react";
import styles from "./header.module.css";

const Header = () => (
  <Container className={styles.header}>
    <h1 className={styles.title}> Welcome to the Voting dApp</h1>
  </Container>
);

export default Header;
