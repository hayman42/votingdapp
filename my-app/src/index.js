import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Manager from "./Manager/Manager";
import Mypage from "./Voter/Mypage";
import Voter from "./Voter/Voter";

// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Mypage />
  </React.StrictMode>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
