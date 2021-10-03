import React, { useState } from "react";
import { Container, TextField, Fab, Button, Popover, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Remove from "@mui/icons-material/Remove";
import { Box } from "@mui/system";
import axios from "axios";

export default function Upload() {
    const [num, setNum] = useState(2);
    const [candidates, setCandidates] = useState(Array(8));
    const [content, setContent] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [popMsg, setPopMsg] = useState("");

    async function handleSubmit(e) {
        const el = e.currentTarget;
        try {
            const res = await axios.get("http://localhost:5000/poll/make", {
                params: { candidates: candidates.filter(x => x), content }
            });
            console.log(res.data);
            setPopMsg(`poll uploaded at block ${res.data}`);
        } catch (err) {
            setPopMsg(`failed to upload`);
        }
        setAnchorEl(el);
    }

    return (
        <Container>
            <h3>Upload Poll</h3>
            <h5>조사 정보를 입력 후 업로드 하세요</h5>
            <Box sx={{ m: 1 }}>
                <TextField
                    label="contents"
                    multiline
                    helperText="조사 내용을 입력하세요."
                    onChange={e => setContent(e.target.value)} />
            </Box>
            {[...Array(num)].map((x, i) =>
                <Box sx={{ m: 1 }} key={i}>
                    <TextField
                        label={`candidate ${i + 1}`}
                        name={`candidate${i}`}
                        onChange={e => {
                            candidates[i] = e.target.value;
                            setCandidates(candidates);
                        }} />
                </Box>)}
            <Box sx={{ m: 1 }}>
                <Fab
                    color="primary"
                    aria-label="add"
                    size="small"
                    onClick={e => num < 8 && setNum(num + 1)}
                    sx={{ mr: 1 }}>
                    <AddIcon />
                </Fab>
                <Fab
                    color="secondary"
                    aria-label="remove"
                    size="small"
                    onClick={e => num > 2 && setNum(num - 1)}
                    sx={{ mr: 1 }}>
                    <Remove />
                </Fab>
                <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
            </Box>
            <Popover
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={e => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            ><Typography sx={{ p: 2 }}>{popMsg}</Typography>
            </Popover>
        </Container >
    );
};