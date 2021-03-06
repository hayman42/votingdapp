import React from "react";
import Poll_list from "./Components/poll_list/poll_list";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Question from "./Components/question/question";
import Manager from "../Manager/Manager";
import SignIn from "./Components/login/SignIn";
import SignUp from "./Components/register/signUp";
import Mypage from "./Mypage";

function Voter() {
  return (
    <Router>
      <Switch>
        <Route path="/edit">
          <Manager />
        </Route>
        <Route path="/myPage">
          <Mypage />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path={["/", "/login"]} exact>
          <SignIn />
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
