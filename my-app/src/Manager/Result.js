import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { Fragment, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

const data = [
    { name: "aa", vote: 32, rate: 33 },
    { name: "bb", vote: 32, rate: 33 },
    { name: "cc", vote: 33, rate: 34 },
];

const question = "가장 좋아하는 알파벳은?";

export default function Result() {
    return (
        <Container>
            <h3>Aggregation of Result</h3>
            <Button size="large" variant="outlined">Q1.{question}</Button>
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
        </Container >
    );
};