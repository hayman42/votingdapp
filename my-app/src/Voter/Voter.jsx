import React from "react";
import styles from "./Voter.module.css";
import Login from "./Components/login/login";
import Poll_list from "./Components/poll_list/poll_list";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuestionPage from "./Components/question/questionPage";
import Voter_result from "./Components/voter_result/voter_result";
import Register from "./Components/register/register";

function Voter() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
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
          <Voter_result />
        </Route>
      </Switch>
    </Router>
  );
}

export default Voter;
