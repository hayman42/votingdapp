import React, { useState } from "react";
import Header from "../commonComponents/header/header";

import styles from "./register.module.css";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import axios from "axios";

import { useHistory } from "react-router";
import { Container, dividerClasses } from "@mui/material";

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit() {
    const res = await axios.get("http://localhost:5000/auth/register", {
      params: {
        name: name,
        address: address,
        password: password,
      },
    });
    console.log(res);
  }

  // Name, Address, Password가 중복인지 아닌지 확인하는 코드 짜기

  return (
    <Container>
      <Header />
      <Box
        className={styles.register}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className={styles.name}
          label="Name"
          variant="outlined"
          size="medium"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          className={styles.address}
          label="Address"
          variant="outlined"
          size="normal"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <TextField
          className={styles.password}
          label="Password"
          variant="outlined"
          size="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Box>
      <div className={styles.button}>
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
          onClick={() => {
            history.push("/login");
          }}
        >
          Complete
        </Button>
      </div>
    </Container>
  );
}
