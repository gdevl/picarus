import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const logoHeader = "PICARUS";

const useStyles = makeStyles({
  logo__header: {
    color: "rgba(198, 120, 221, 1)",
    // color: "rgba(255, 0, 255, 1)",
    fontFamily: "Josefin Sans",
    // margin: "auto",
    // textShadow: `2px 2px 0px rgba(198, 120, 221, 0.5)`,
    // 2px 3px 4px rgba(255, 255, 255, 1),
    //     3px 3px 0px rgba(97, 175, 239, 1),
    //     4px 4px 0px rgba(198, 120, 221, 1),
    //     5px 5px 0px rgba(97, 175, 239, 1)
    //     `,
  },
  logo__subheader: {
    color: "white",
  },
});

const Logo = () => {
  return <h2 className="landing__logo">{logoHeader}</h2>;
};

export default Logo;
