import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useHistory } from "react-router";

export default function MenuBar() {
  const history = useHistory();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button
          onClick={() => {
            history.push("/poll_list");
          }}
        >
          Poll List
        </Button>
        <Button
          onClick={() => {
            history.push("/myPage");
          }}
        >
          My Page
        </Button>
      </ButtonGroup>
    </Box>
  );
}
