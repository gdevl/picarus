import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../Logo/Logo";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Picarus {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  signin__container: {
    // backgroundColor: "#222",
  },
  signin__input: {
    "&::placeholder": {
      color: "white !important",
      fontFamily: "Prompt !important",
    },
    "&::label": {
      color: "white !important",
      fontFamily: "Prompt !important",
    },
    // backgroundColor: "#222",
    color: "white",
    fontFamily: "Prompt",
    // margin: "0.5em 0 0 0",
    // padding: "0.25em 1em",
  },
  paper: {
    // backgroundColor: "#222",
    fontFamily: "Prompt",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  signin__spacing: {
    margin: "16px 0px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container
      className={classes.signin__container}
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Logo />
        <Typography
          className={classes.signin__input}
          component="h4"
          variant="h5"
        >
          Sign In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            // variant="outlined"
            // className={classes.signin__input}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              classes: { input: classes.signin__input },
            }}
          />
          <TextField
            // variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              classes: { input: classes.signin__input },
            }}
          />
          <FormControlLabel
            // className={classes.signin__input}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            InputProps={{
              classes: { input: classes.signin__input },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={[classes.signin__spacing, classes.signin__input]}
          >
            Sign In
          </Button>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Link
                href="/signup"
                variant="body2"
                className={classes.signin__input}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          className={classes.signin__input}
        >
          {"Copyright © "}
          Picarus {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Container>
  );
}
