import React, { Fragment, useEffect, useState } from "react";

import MenuBar from "../commonComponents/menuBar/menuBar";
import Header from "../commonComponents/header/header";
// import Question from "../question/question";

import styles from "./poll_list.module.css";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

import { useHistory } from "react-router";

import axios from "axios";

// const data = [
//   "지지하고 있는 정당은?",
//   "20대이신가요?",
//   "대학생이신가요?",
//   "좋아하는 과일은?",
// ];

export default function Poll_list() {
  const history = useHistory();

  // useEffect와 Hook 그리고 axios를 통해서 data를 저장하자
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      const res = await axios.get("http://localhost:5000/poll/list");
      setData(res.data);
    }
    fetch();
  }, []);

  return (
    <Container>
      <Header />
      <MenuBar />
      <h1 className={styles.contents}> Poll List </h1>

      <div className={styles.list}>
        {data.map((x, i) => (
          <Fragment key={i}>
            <div className={styles.question}>
              <Button
                variant="text"
                size="large"
                onClick={() => {
                  history.push("/question");
                }}
              >
                {i + 1}. {x[1]}
              </Button>
            </div>
          </Fragment>
        ))}
      </div>
    </Container>
  );
}
