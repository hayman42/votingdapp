import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from "@mui/system";
import axios from "axios";

// const data = [
//     { name: "aa", vote: 32, rate: 33 },
//     { name: "bb", vote: 32, rate: 33 },
//     { name: "cc", vote: 33, rate: 34 },
// ];

// const question = "가장 좋아하는 알파벳은?";

export default function Result() {
    const [poll, setPoll] = useState(null);
    const [data, setData] = useState(null);
    const [question, setQuestion] = useState();

    async function handleSubmit(e) {
        const result = await axios.get("http://localhost:5000/poll/result", {
            params: { poll }
        });
        const info = await axios.get("http://localhost:5000/poll/info", {
            params: { poll }
        });
        let content = info.data[1];
        let [candidates, votes] = result.data;
        let sum = votes.reduce((a, b) => Number(a) + Number(b), 0);
        let newData = candidates.map((x, i) => {
            return {
                name: x,
                vote: votes[i], rate: sum === 0 ? 0 : votes[i] * 100 / sum
            };
        });
        console.log(info.data);
        setQuestion(content);
        setData(newData);
    }

    return (
        <Container>
            <h3>Aggregation of Result</h3>
            <Box>
                <TextField
                    label="poll number"
                    helperText="결과를 볼 조사의 번호를 입력하세요."
                    size="small"
                    onChange={e => setPoll(Number(e.target.value))}
                ></TextField>
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
            {
                data &&
                <Fragment>
                    <Button size="large" variant="outlined">Q{poll + 1}.{question}</Button>
                    <TableContainer component={Paper}>
                        <Table  >
                            <TableHead>
                                <TableRow>
                                    {
                                        ["#", "후보", "득표수", "득표율"].map((x, i) =>
                                            <TableCell align="left" key={i}><b>{x}</b></TableCell>)
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data.map((x, i) =>
                                        <TableRow key={i}>
                                            <TableCell align="left">
                                                {Math.max(...data.map(x => x.vote)) === x.vote ?
                                                    <FavoriteIcon fontSize="small" /> : i + 1}
                                            </TableCell>
                                            <TableCell align="left">
                                                {x.name}
                                            </TableCell>
                                            <TableCell align="left">
                                                {x.vote}
                                            </TableCell>
                                            <TableCell align="left">
                                                {x.rate}%
                                            </TableCell>
                                        </TableRow>
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Fragment>
            }
        </Container >
    );
};