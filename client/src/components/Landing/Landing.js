import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RandomPhoto from "./RandomPhoto";

const landingHeader = "PICARUS";
const landingSubHeader = "NO FRILLS PHOTO SHARING";

const useStyles = makeStyles({
  landing__header: {
    color: "white",
    fontFamily: "Prompt",
    textShadow: "6px 6px 0px rgba(0,0,0,0.5)",
    // textShadow: "2px 4px 3px rgba(255,255,255,0.2)",
  },
  landing__subheader: {
    color: "white",
  },
  landing__photo_box: {
    height: "300px",
    outline: "1px solid gray",
    width: "300px",
  },
  landing__actions: {
    color: "white",
  },
  landing__button_wide: {
    width: "100%",
  },
  outlined: {
    outline: "1px solid white",
    margin: "10px",
  },
});

const Landing = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      spacing={2}
      style={{ minHeight: "100vh", backgroundColor: "#222" }}
    >
      <Grid item>
        <Typography className={classes.landing__header} variant="h2">
          {landingHeader}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          className={classes.landing__subheader}
          variant="subtitle2"
          gutterBottom
        >
          {landingSubHeader}
        </Typography>
      </Grid>
      <Grid item>
        <Box className={classes.landing__photo_box}>
          <RandomPhoto />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.landing__button_wide}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.landing__button_wide}
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
