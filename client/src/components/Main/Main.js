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
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
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
  hidden: {
    opacity: 0,
    pointerEvents: "none",
  },
}));

const Main = () => {
  console.log("IN MAIN");
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const posts = useSelector((state) => state.posts);
  const ids = useSelector((state) => state.posts.ids);
  const currentUserDisplayName = useSelector(
    (state) => state.authentication.user.displayName
  );
  const currentPostId = useSelector((state) => state.posts.currentPostId);
  // const postIndex = useRef(ids[ids.length - 1]);
  const postIndex = useRef(null);

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    postIndex.current = ids[ids.length - 1];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  useEffect(() => {
    dispatch(setCurrentPost(postIndex.current));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  const handleLinkedInClick = () => {
    return (window.location.href =
      "https://www.linkedin.com/in/gabriel-lane-4120651bb/");
  };

  const handleGitHubClick = () => {
    return (window.location.href = "https://github.com/gdevl");
  };

  const handleNextPost = () => {
    postIndex.current--;
    dispatch(setCurrentPost(postIndex.current));
  };

  const handlePreviousPost = () => {
    postIndex.current++;
    dispatch(setCurrentPost(postIndex.current));
  };

  if (!token) {
    return <Redirect to="/signin" />;
  }

  const thePost = posts[currentPostId];
  if (!thePost) return null;

  return (
    <>
      <AppBar position="static" className={classes.main__appbar}>
        {console.log("IN THE RENDER")}
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <AddAPhotoIcon
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
          <Grid container spacing={4} justify="center" align="center">
            <div className="main__container_detail_row">
              <div id="main__container_detail_row_prev_post">
                {/* is there a previous post? Show the button! If not, hide it! */}
                {posts[postIndex.current + 1] ? (
                  <IconButton
                    color="primary"
                    aria-label="previous post"
                    component="span"
                    onClick={handlePreviousPost}
                  >
                    <NavigateBeforeIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    className={classes.hidden}
                    color="primary"
                    aria-label="previous post"
                    component="span"
                    onClick={handlePreviousPost}
                  >
                    <NavigateBeforeIcon />
                  </IconButton>
                )}
              </div>
              <div className="main__container_detail_row_text">{`${currentUserDisplayName}'s Feed`}</div>
              <div id="main__container_detail_row_next_post">
                {/* is there a next post? Show the button! If not, hide it! */}
                {posts[postIndex.current - 1] ? (
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={handleNextPost}
                  >
                    <NavigateNextIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    className={classes.hidden}
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={handleNextPost}
                  >
                    <NavigateNextIcon />
                  </IconButton>
                )}
              </div>
            </div>
            <Grid item xs={12}>
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
