import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Box } from "@mui/system";


export default function Mypage() {
    const data = [
        { poll: "좋아하는 과일", name: "사과", win: true },
        { poll: "좋아하는 색깔", name: "노랑", win: true },
        { poll: "좋아하는 언어", name: "C++", win: false },
    ];

    return (
        <Container>
            <h3>My page</h3>
            <Fragment>
                <TableContainer component={Paper}>
                    <Table  >
                        <TableHead>
                            <TableRow>
                                {
                                    ["#", "조사", "선택한 후보", "승/패"].map((x, i) =>
                                        <TableCell align="left" key={i}><b>{x}</b></TableCell>)
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.map((x, i) =>
                                    <TableRow key={i}>
                                        <TableCell align="left">
                                            {i + 1}
                                        </TableCell>
                                        <TableCell align="left">
                                            {x.poll}
                                        </TableCell>
                                        <TableCell align="left">
                                            {x.name}
                                        </TableCell>
                                        <TableCell align="left">
                                            {x.win ? "승" : "패"}
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Fragment>
        </Container >
    );
};