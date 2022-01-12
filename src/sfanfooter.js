import {
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./App.css";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";

export default function SfanFooter() {
  return (
    <div className="footer">
      <Grid container spacing={2}>
        <Grid
          item
          direction="column"
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            container
            direction="row"
            spacing={2}
            justifyContent="space-between"
          >
            <Grid item xs={4}>
              <Typography
                variant="h5"
                color="blue"
                sx={{
                  marginBottom: "1rem",
                }}
              >
                Get in touch
              </Typography>
              <TextField
                id="outlined-basic"
                placeholder="Name"
                variant="outlined"
                sx={{
                  marginBottom: "1rem",
                }}
              />
              <TextField
                id="outlined-basic"
                placeholder="Email"
                variant="outlined"
                sx={{
                  marginBottom: "1rem",
                }}
              />
              <TextField
                id="outlined-basic"
                placeholder="Comment"
                variant="outlined"
                multiline
                rows={4}
                sx={{
                  marginBottom: "1rem",
                }}
              />
              <br />
              <Button
                variant="contained"
                sx={{
                  marginBottom: "3rem",
                }}
              >
                CONTACT US NOW
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                color="blue"
                sx={{
                  marginBottom: "1rem",
                }}
              >
                Quick Links
              </Typography>
              <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid item xs={5}>
                  <a
                    href="https://www.sfanonline.org/venture-studio"
                    alt=""
                    color="inherit"
                  >
                    <Typography color="secondary">venture-studio</Typography>
                  </a>
                </Grid>
                <br />
                <Grid xs={5} item>
                  <a
                    href="https://www.sfanonline.org/join-us"
                    alt=""
                    color="inherit"
                  >
                    <Typography color="secondary">#StarsWeAre</Typography>
                  </a>
                </Grid>
                <br />
                <Grid xs={5} item>
                  <a
                    href="https://www.readyforwork.africa"
                    alt=""
                    color="inherit"
                  >
                    <Typography color="secondary">ReadforWork</Typography>
                  </a>
                </Grid>
                <br />
                <Grid xs={5} item>
                  <a
                    href="https://www.sfanonline.org/resume"
                    alt=""
                    color="inherit"
                  >
                    <Typography color="secondary">Resume Service</Typography>
                  </a>
                </Grid>
                <br />
                <Grid xs={5} item>
                  <a
                    href="https://www.sfanonline.org/events"
                    alt=""
                    color="inherit"
                  >
                    <Typography color="secondary">Events</Typography>
                  </a>
                </Grid>
                <br />
                <Grid xs={5} item>
                  <a
                    href="https://www.sfanonline.org/contact"
                    alt=""
                    color="inherit"
                  >
                    <Typography color="secondary">Help Center</Typography>
                  </a>
                </Grid>
                <br />
                <Grid xs={5} item>
                  <a
                    href="https://www.sfanonline.org/media"
                    alt=""
                    color="inherit"
                  >
                    <Typography color="secondary">Media</Typography>
                  </a>
                </Grid>
                <br />
                <Grid xs={5} item>
                  <a
                    href="https://www.sfanonline.org/privacy"
                    alt=""
                    color="inherit"
                  >
                    <Typography color="secondary">Privacy</Typography>
                  </a>
                </Grid>
                <br />
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h4"> SFAN</Typography>
              <Grid
                item
                container
                direction="column"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid item xs={5}>
                  <Typography variant="subtitle1">
                    SFAN is unlocking the potential of Africa's young geniuses
                    by helping them turn their passion into businesses and
                    fulfilling careers.
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="subtitle1">
                    <FmdGoodIcon />
                    King Solomon's Height, 26, Mango St, Accra
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="subtitle1">
                    <PhoneIcon />
                    030 280 2935
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="subtitle1">
                    <EmailIcon />
                    info@sfanonline.org
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider color="#ffffff" flexItem />
      <Stack
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={5}
      >
        <Typography variant="subtitle1">
          Copyright© 2022 Stars From All Nations Ltd
        </Typography>
      </Stack>
    </div>
  );
}
