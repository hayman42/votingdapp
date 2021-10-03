import React, { Fragment, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Upload from "./Upload";
import Result from "./Result";
import Controll from "./Controll";

export default function Manager() {
    const [value, setValue] = useState(0);
    return (
        <Fragment>
            <AppBar position="static" style={{ background: "grey" }}>
                <Grid alignItems="center">
                    <Tabs
                        value={value}
                        onChange={(e, newValue) => setValue(newValue)}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value={0} label="Upload" />
                        <Tab value={1} label="Result" />
                        <Tab value={2} label="Controll" />
                    </Tabs>
                </Grid>
            </AppBar>

            <h2>{[<Upload />, <Result />, <Controll />][value]}</h2>
        </Fragment>
    );
};