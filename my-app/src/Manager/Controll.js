import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";

const question = "가장 좋아하는 알파벳은?";

export default function Controll() {
    return (
        <Container>
            <h3>Cotroll Poll Status</h3>
            <Box>
                <Button size="large" variant="outlined">Q1.{question}</Button>
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
        </Container >
    );
};