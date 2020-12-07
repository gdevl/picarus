import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
  paper: {
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
    marginTop: theme.spacing(3),
  },
  signup__spacing: {
    margin: "16px 0px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signup__input: {
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
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <Typography
          component="h1"
          variant="h5"
          className={classes.signup__input}
        >
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="displayName"
                name="displayName"
                required
                fullWidth
                id="displayName"
                label="Display Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={[classes.signup__spacing, classes.signup__input]}
          >
            Sign Up
          </Button>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Link
                href="/signin"
                variant="body2"
                className={classes.signup__input}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          className={classes.signup__input}
        >
          {"Copyright © "}
          Picarus
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
