import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
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
import CameraIcon from "@material-ui/icons/PhotoCamera";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { FcCompactCamera } from "react-icons/fc";
import { IconContext } from "react-icons";
import Logo from "../Logo/Logo";
import Post from "../Post/Post";
import LogoutButton from "./LogoutButton";
import { fetchPosts, setCurrentPost } from "../../store/actions/posts";

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
    margin: "auto",
    width: "90%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#222",
    borderTop: "1px solid #C678DD",
    padding: theme.spacing(1),
  },
  footer__appBar: {
    alignItems: "center",
    backgroundColor: "#222",
    borderTop: "1px solid #C678DD",
    padding: theme.spacing(1),
    top: "auto",
    bottom: 0,
  },
  footer__appBar_iconbuttons: {
    margin: "0 0.25rem",
  },
  main__appbar: {
    borderBottom: "1px solid #C678DD",
    justifyContent: "space-between",
    flexFlow: "row nowrap",
    backgroundColor: "#222",
  },
  main__footer_icons: {},
  grow: {
    flexGrow: 1,
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [1];

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const posts = useSelector((state) => state.posts);
  const ids = useSelector((state) => state.posts.ids);
  const currentPostId = useSelector((state) => state.posts.currentPostId);
  const index = useRef(0);
  // const [currentPostId, setCurrentPostId] = useState(1);

  // const currentPostId = useSelector((state) => state.posts.)

  useEffect(() => {
    dispatch(fetchPosts());
    // setCurrentPostId(ids[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setCurrentPost(ids[index.current]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  const handleLinkedInClick = () => {
    return (window.location.href =
      "https://www.linkedin.com/in/gabriel-lane-4120651bb/");
  };

  const handleGitHubClick = () => {
    return (window.location.href = "https://github.com/gdevl");
  };

  if (!token) {
    return <Redirect to="/signin" />;
  }
  // const thePost = "";
  const thePost = posts[currentPostId];

  return (
    <>
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
          {/* {console.log(thePost)} */}
          {/* {console.log(imageUrl)} */}
          <Grid container spacing={4} justify="center" align="center">
            <Typography
              className="main__post_container_heading"
              color="secondary"
              variant="overline"
            >
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
              {thePost ? (
                <Post key={`post ${thePost.id}`} post={thePost} />
              ) : null}
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <AppBar position="fixed" className={classes.footer__appBar}>
        <Toolbar>
          <div className={classes.grow} />
          <Link to="https://www.google.com/">
            <IconButton
              color="inherit"
              className={classes.footer__appBar_iconbuttons}
              onClick={handleGitHubClick}
            >
              <GitHubIcon
                color="primary"
                className={classes.main__footer_icons}
              />
            </IconButton>
          </Link>
          <Button
            edge="end"
            color="inherit"
            className={classes.footer__appBar_iconbuttons}
          >
            <LinkedInIcon
              color="primary"
              className={classes.main__footer_icons}
              onClick={handleLinkedInClick}
            />
          </Button>
        </Toolbar>
      </AppBar>
      {/* End footer */}
    </>
  );
};

export default Main;
