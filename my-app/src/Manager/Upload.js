import React, { useState } from "react";
import { Container, TextField, Fab, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Remove from "@mui/icons-material/Remove";
import { Box } from "@mui/system";

export default function Upload() {
    const [num, setNum] = useState(2);
    return (
        <Container>
            <h3>Upload Poll</h3>
            <h5>조사 정보를 입력 후 업로드 하세요</h5>
            <form onSubmit={e => console.log("ok")}>
                <Box sx={{ m: 1 }}>
                    <TextField
                        label="contents"
                        multiline
                        helperText="조사 내용을 입력하세요." />
                </Box>
                {[...Array(num)].map((x, i) =>
                    <Box sx={{ m: 1 }} key={i}>
                        <TextField
                            label={`candidate ${i + 1}`}
                            name={`candidate${i}`} />
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
                    <Button variant="outlined" type="submit">Submit</Button>
                </Box>
            </form>
        </Container >
    );
};