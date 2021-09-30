import React from "react";
import styles from "./Voter.module.css";
import Login from "./Components/login/login";
import Poll_list from "./Components/poll_list/poll_list";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuestionPage from "./Components/question/questionPage";

function Voter() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]} exact>
          <Login />
        </Route>
        <Route path="/poll_list">
          <Poll_list />
        </Route>
        <Route path="/questionPage">
          <QuestionPage />
        </Route>
        <Route path="/voterResult">
          <QuestionPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Voter;
