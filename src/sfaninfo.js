import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import CEO from "./assets/CEO.jpg";
import chargeflow from "./assets/chargeflow.png";
import ashoka from "./assets/ashoka.png";
import british from "./assets/british.jpg";
import ecobank from "./assets/ecobank.png";
import village from "./assets/village.png";

export default function SfanInfo() {
  return (
    <div>
      <div className="info">
        <Grid container spacing={2} padding="3rem">
          <Grid
            item
            container
            direction="row"
            alignItems="start"
            justifyContent="flex-start"
          >
            <Grid
              container
              direction="row"
              item
              justifyContent="space-between"
              spacing={2}
            >
              <Grid item sm={5} xs={5}>
                <Typography variant="h3" color="blue">
                  Interested in Partnership
                </Typography>
                <Typography variant="subtitle1">
                  If you'd like to partner with us to scale our youth deveopment
                  efforts, enhance you productivity or re-engineer your business
                  process, reach out to us. And we'll walk you through various
                  partnership and investment options for increased ROI.
                </Typography>
                <br />
                <Button variant="outlined" color="inherit">
                  {" "}
                  Talk to us
                </Button>
              </Grid>
              <Grid item sm={5} xs={5}>
                <img src={CEO} alt="ceo" width="500" height="500" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="brands">
        <Typography variant="h3">
          The Best Brands <span className="sfan"> Trusts Us</span>
        </Typography>
        <Grid container spacing={2}>
          <Grid
            item
            container
            direction="row"
            alignItems="start"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item xs={2}>
              <img src={chargeflow} alt="chargeflow" width="200" height="200" />
            </Grid>
            <Grid item xs={2}>
              <img src={ashoka} alt="ashoka" />
            </Grid>
            <Grid item xs={2}>
              <img src={british} alt="british" width="200" height="200" />
            </Grid>
            <Grid item xs={2}>
              <img src={ecobank} alt="ecobank" />
            </Grid>
            <Grid item xs={2}>
              <img src={village} alt="village" width="200" height="200" />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
