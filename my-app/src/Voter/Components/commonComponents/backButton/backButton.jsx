import React from "react";

import styles from "./backButton.module.css";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { useHistory } from "react-router";

function BackButton() {
  const history = useHistory();
  return (
    <div>
      <Button
        className={styles.confirm}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => {
          history.push("/poll_list");
        }}
      >
        Back To Poll List
      </Button>
    </div>
  );
}

export default BackButton;
