import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const signupHeader = "PICARUS";
const signupSubHeader = "Just a few details first";

const useStyles = makeStyles({
  signup__header: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Prompt",
    textShadow:
      "2px 2px 0px rgba(198, 120, 221, 0.5), 3px 3px 0px rgba(97, 175, 239, 0.5)",
  },
  signup__subheader: {
    color: "white",
  },
  signup__photo_box: {
    height: "300px",
    width: "300px",
  },
  signup__actions: {
    color: "white",
  },
  signup__button_wide: {
    width: "100%",
  },
  outlined: {
    outline: "1px solid white",
    margin: "10px",
  },
});

const Signup = () => {
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
        <Typography className={classes.signup__header} variant="h2">
          {signupHeader}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          className={classes.signup__subheader}
          variant="subtitle2"
          gutterBottom
        >
          {signupSubHeader}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.signup__button_wide}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.signup__button_wide}
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
