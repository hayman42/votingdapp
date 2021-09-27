import React from "react";
import styles from "./login.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Login = () => (
  <div className={styles.login}>
    <h1> Name </h1>
    <h1> Address </h1>
    <Button variant="contained" endIcon={<SendIcon />}>
      Confirm
    </Button>
  </div>
);
export default Login;
