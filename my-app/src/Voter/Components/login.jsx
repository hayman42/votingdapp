import React, { Component } from "react";
import Button from "@mui/material/Button";

class Login extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    );
  }
}

export default Login;
