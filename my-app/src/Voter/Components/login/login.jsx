import React from "react";
import styles from "./login.module.css";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useHistory } from "react-router";

export default function Login() {
  const history = useHistory();
  return (
    <>
      <h1 className={styles.header}> Welcome to the Voting dApp</h1>
      <div className={styles.login}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField className={styles.name} label="Name" variant="outlined" />
          <TextField
            className={styles.address}
            label="Address"
            variant="outlined"
          />
        </Box>
        <Button
          className={styles.confirm}
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => {
            history.push("/poll_list");
          }}
        >
          Confirm
        </Button>
      </div>
    </>
  );
}
