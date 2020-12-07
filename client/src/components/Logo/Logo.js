import React from "react";
import { FcCompactCamera } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const loginHeader = "PICARUS";

const useStyles = makeStyles({
  login__header: {
    color: "rgba(198, 120, 221, 1)",
    // color: "rgba(255, 0, 255, 1)",
    fontFamily: "Prompt",
    // textShadow: `2px 2px 0px rgba(198, 120, 221, 0.5)`,
    // 2px 3px 4px rgba(255, 255, 255, 1),
    //     3px 3px 0px rgba(97, 175, 239, 1),
    //     4px 4px 0px rgba(198, 120, 221, 1),
    //     5px 5px 0px rgba(97, 175, 239, 1)
    //     `,
  },
  login__subheader: {
    color: "white",
  },
  login__icon_header: {
    paddingBottom: "0px !important",
  },
});

const Logo = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.login__icon_header} variant="h2">
        <IconContext.Provider
          value={{
            className: "title__camera",
          }}
        >
          <FcCompactCamera />
        </IconContext.Provider>
      </Typography>
      <Typography className={classes.login__header} variant="h2">
        {loginHeader}
      </Typography>
    </>
  );
};

export default Logo;
