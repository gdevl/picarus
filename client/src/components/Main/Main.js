import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { FcCompactCamera } from "react-icons/fc";
import { IconContext } from "react-icons";
import Logo from "../Logo/Logo";
import Post from "../Post/Post";
import LogoutButton from "./LogoutButton";
import { fetchPosts } from "../../store/actions/posts";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    // backgroundColor: "#000",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    backgroundColor: "#222",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  cardMedia: {
    height: "90%",
    // paddingTop: "56.25%", // 16:9
    margin: "auto",
    width: "90%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#222",
    padding: theme.spacing(2),
  },
  main__appbar: {
    justifyContent: "space-between",
    flexFlow: "row nowrap",
    backgroundColor: "#222",
  },
  main__appbar_icons: {},
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [1];

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!token) {
    return <Redirect to="/signin" />;
  }

  const thePost = posts.postIds[1];

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.main__appbar}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <CameraIcon
              color="primary"
              className={classes.main__appbar_icons}
            />
          </IconButton>
        </Toolbar>
        <Logo />
        <Toolbar>
          <LogoutButton />
        </Toolbar>
      </AppBar>
      <main className="main__container">
        <Container className={classes.cardGrid} maxWidth="md">
          {console.log(thePost)}
          {/* {console.log(imageUrl)} */}
          <Grid container spacing={4} justify="center" align="center">
            <Typography color="primary" variant="overline">
              My Pics
            </Typography>
            {/* {Object.values(posts.postIds).map((post) => ( */}
            {/* // <Grid item key={card} xs={12} sm={6} md={4}> */}
            <Grid item xs={12}>
              {/* <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={posts.postIds[1].imageUrl}
                    title="Image title"
                  />
                </Card> */}
              <Post post={thePost} />
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Main;
