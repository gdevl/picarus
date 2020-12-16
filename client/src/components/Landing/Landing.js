import React from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../Logo/Logo";
import SubTitle from "./SubTitle";
import RandomPhoto from "./RandomPhoto";
import GetStarted from "./GetStarted";

const landingHeader = "PICARUS";
const landingSubHeader = "NO FRILLS PHOTO SHARING";

const useStyles = makeStyles({
  landing__header: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Josefin Sans",
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
  const token = useSelector((state) => state.authentication.token);

  // if (!token) {
  //   return <Redirect to="/signin" />;
  // }
  return (
    // <Grid
    //   container
    //   direction="column"
    //   alignItems="center"
    //   justify="center"
    //   style={{ backgroundColor: "#222" }}
    // >
    //   <Grid item>
    //     <Logo />
    //   </Grid>
    //   <Grid item>
    //     <Box boxShadow={3} className={classes.landing__photo_box}>
    //       <RandomPhoto />
    //     </Box>
    //   </Grid>
    // </Grid>
    <div className="landing__container">
      <div className="landing__content">
        <Logo />
        <SubTitle />
        <RandomPhoto />
        <GetStarted />
      </div>
    </div>
  );
};

export default Landing;
