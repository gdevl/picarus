import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RandomPhoto from "./RandomPhoto";

const landingHeader = "PICARUS";
const landingSubHeader = "NO FRILLS PHOTO SHARING";

const useStyles = makeStyles({
  landing__header: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Prompt",
    textShadow:
      "2px 2px 0px rgba(198, 120, 221, 0.5), 3px 3px 0px rgba(97, 175, 239, 0.5)",
  },
  landing__subheader: {
    color: "white",
  },
  landing__photo_box: {
    height: "300px",
    // outline: "1px solid gray",
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
      style={{ backgroundColor: "#222" }}
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
        <Box boxShadow={3} className={classes.landing__photo_box}>
          <RandomPhoto />
        </Box>
      </Grid>
      <Grid item>
        <Grid container justify="center">
          <Grid item>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                className={classes.landing__button_wide}
              >
                Sign Up
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.landing__button_wide}
              >
                Log In
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
