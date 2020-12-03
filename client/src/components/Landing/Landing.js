import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const landingHeader = "PICARUS";
const landingSubHeader = "NO FRILLS PHOTO SHARING";

const useStyles = makeStyles({
  landing__header: {
    color: "white",
    fontFamily: "Prompt",
  },
  landing__subheader: {
    color: "white",
  },
  landing__photo_box: {
    height: "200px",
    outline: "1px solid gray",
    width: "200px",
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
      style={{ minHeight: "100vh", backgroundColor: "black" }}
    >
      <Grid item xs={6}>
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
        <Box className={classes.landing__photo_box}></Box>
      </Grid>
    </Grid>
  );
};

export default Landing;
