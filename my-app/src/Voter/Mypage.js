import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

export default function Mypage() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetch() {
            const res = await axios.get("http://localhost:5000/user/info", {
                params: {
                    name: "asdf"
                }
            });
            const { voteinfo } = res.data;
            setData(voteinfo);
        }
        fetch();
    }, []);

    return (
        <Container>
            <h3>My page</h3>
            <Fragment>
                <TableContainer component={Paper}>
                    <Table  >
                        <TableHead>
                            <TableRow>
                                {
                                    ["#", "날짜", "조사", "선택한 후보", "승/패"].map((x, i) =>
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
                                            {x.createdAt}
                                        </TableCell>
                                        <TableCell align="left">
                                            {x.content}
                                        </TableCell>
                                        <TableCell align="left">
                                            {x.candidate}
                                        </TableCell>
                                        <TableCell align="left">
                                            {x.win}
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