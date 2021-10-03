import React, { Fragment, useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";


export default function Controll() {
    const [poll, setPoll] = useState();
    const [content, setContent] = useState();
    const [open, setOpen] = useState();

    async function handleSubmit(e) {
        const info = await axios.get("http://localhost:5000/poll/info", {
            params: { poll }
        });
        const [_, content, open] = info.data;
        setContent(content);
        setOpen(open);
    }
    return (
        <Container>
            <h3>Controll Poll Status</h3>
            <Box>
                <TextField
                    label="poll number"
                    helperText="조작할 조사의 번호를 입력하세요."
                    size="small"
                    onChange={e => setPoll(Number(e.target.value))}
                ></TextField>
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
            {content && <Fragment>
                <Box>
                    <Button size="large" variant="outlined">Q{poll + 1}.{content}</Button>
                    <Button>Currently {open ? "OPEN" : "CLOSED"}</Button>
                </Box>
                <br />
                <Box>
                    <Button size="large" variant="contained" color="success">
                        Voting Open
                    </Button>
                </Box>
                <Box>
                    <Button size="large" variant="contained" color="error">
                        Voting Close
                    </Button>
                </Box>
            </Fragment>}
        </Container >
    );
};