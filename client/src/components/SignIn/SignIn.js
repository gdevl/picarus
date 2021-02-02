import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconLogo from '../Logo/IconLogo';
import { login } from '../../store/actions/authentication';

const useStyles = makeStyles((theme) => ({
    signin__container: {
        // backgroundColor: "#222",
    },
    signin__input: {
        '&::placeholder': {
            color: 'white !important',
            fontFamily: 'Josefin Sans !important',
        },
        '&::label': {
            color: 'white !important',
            fontFamily: 'Josefin Sans !important',
        },
        // backgroundColor: "#222",
        color: 'white',
        fontFamily: 'Josefin Sans',
        // margin: "0.5em 0 0 0",
        // padding: "0.25em 1em",
    },
    paper: {
        // backgroundColor: "#222",
        fontFamily: 'Josefin Sans',
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    signin__spacing: {
        margin: '16px 0px',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    demo__signin_spacing: {
        margin: '0px 0px 16px',
    },
}));

const SignIn = () => {
    const classes = useStyles();
    const token = useSelector((state) => state.authentication.token);
    const [email, setEmail] = useState('jeff@example.com');
    const [password, setPassword] = useState('password');
    const demoEmail = 'jeff@example.com';
    const demoPassword = 'password';
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        (async () => {
            dispatch(login(email, password));
        })();
    };

    const handleDemoLogin = async (e) => {
        e.preventDefault();
        (async () => {
            dispatch(login(demoEmail, demoPassword));
        })();
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    // const updateProperty = (property) => (e) => {
    //   [property] = e.target.value;
    // };

    if (token) {
        return <Redirect to="/" />;
    }

    return (
        <Container
            className={classes.signin__container}
            component="main"
            maxWidth="xs"
        >
            <CssBaseline />
            <div className={classes.paper}>
                <IconLogo />
                <Typography
                    className={classes.signin__input}
                    component="h4"
                    variant="h5"
                >
                    Sign In
                </Typography>
                <form
                    className={classes.form}
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <TextField
                        onChange={updateEmail}
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
                        onChange={updatePassword}
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
                        className={[
                            classes.signin__spacing,
                            classes.signin__input,
                        ]}
                    >
                        Sign In
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={[
                            classes.demo__signin_spacing,
                            classes.signin__input,
                        ]}
                        onClick={handleDemoLogin}
                    >
                        Demo Login
                    </Button>
                    <Grid container justify="center">
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
            <Box mt={5}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                    className={classes.signin__input}
                >
                    {'Copyright © '}
                    Picarus {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
        </Container>
    );
};

export default SignIn;
