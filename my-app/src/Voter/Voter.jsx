import React from "react";
import Login from "./Components/login/login";
import Poll_list from "./Components/poll_list/poll_list";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      </Switch>
    </Router>
  );
}

export default Voter;
