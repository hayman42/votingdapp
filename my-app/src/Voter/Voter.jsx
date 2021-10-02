import React from "react";
import styles from "./Voter.module.css";
import Login from "./Components/login/login";
import Poll_list from "./Components/poll_list/poll_list";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Question from "./Components/question/question";
import Register from "./Components/register/register";
import Manager from "../Manager/Manager";

function Voter() {
  return (
    <Router>
      <Switch>
        <Route path="/edit">
          <Manager />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path={["/", "/login"]} exact>
          <Login />
        </Route>
        <Route path="/poll_list">
          <Poll_list />
        </Route>
        <Route path="/question">
          <Question />
        </Route>
      </Switch>
    </Router>
  );
}

export default Voter;
