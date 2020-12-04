import React from "react";
import { FcCompactCamera } from "react-icons/fc";
import { IconContext } from "react-icons";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
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
  login__photo_box: {
    height: "300px",
    width: "300px",
  },
  login__actions: {
    color: "white",
  },
  login__button_wide: {
    fontFamily: "Prompt",
    width: "100%",
  },
  login__form: {
    color: "white",
  },
  login__icon_header: {
    paddingBottom: "0px !important",
  },
  login__input: {
    "&::placeholder": {
      color: "white",
      fontFamily: "Prompt",
    },
    color: "white",
    fontFamily: "Prompt",
  },
  login__input_spacing: {
    margin: "2em 0 0 0",
  },
  outlined: {
    outline: "1px solid white",
    margin: "10px",
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      spacing={3}
      style={{ minHeight: "100vh", backgroundColor: "#222" }}
    >
      <Grid item>
        <Typography className={classes.login__icon_header} variant="h2">
          <IconContext.Provider
            value={{
              className: "title__camera",
            }}
          >
            <FcCompactCamera />
          </IconContext.Provider>
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.login__header} variant="h2">
          {loginHeader}
        </Typography>
      </Grid>
      <form className={classes.login__form} noValidate autoComplete="off">
        <Grid item>
          <TextField
            type="email"
            id="filled-secondary"
            placeholder="Email"
            // variant="outlined"
            color="primary"
            fullWidth
            InputProps={{
              classes: { input: classes.login__input },
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            id="filled-secondary"
            placeholder="Password"
            // variant="outlined"
            color="primary"
            fullWidth
            InputProps={{
              classes: { input: classes.login__input },
            }}
          />
        </Grid>
        <Grid className={classes.login__input_spacing} item>
          <Button
            variant="contained"
            color="primary"
            className={classes.login__button_wide}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;
