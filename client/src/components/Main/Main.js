import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Popper from "@material-ui/core/Popper";
import LogoutButton from "./LogoutButton";
import Logo from "../Logo/Logo";
import Post from "../Post/Post";

import {
  createPost,
  fetchPosts,
  setCurrentPost,
} from "../../store/actions/posts";

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
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.authentication.user.id);
  const token = useSelector((state) => state.authentication.token);
  const posts = useSelector((state) => state.posts);
  const ids = useSelector((state) => state.posts.ids);
  const currentUserDisplayName = useSelector(
    (state) => state.authentication.user.displayName
  );
  const currentPostId = useSelector((state) => state.posts.currentPostId);
  const postIndex = useRef(null);

  // Add post form toggle defs
  const [postContent, setPostContent] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const post = {
      uid: currentUserId,
      content: postContent,
      imageUrl: postImageUrl,
    };

    await dispatch(createPost(post));
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const handleAddPostClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

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

  const updatePostContent = (e) => {
    setPostContent(e.target.value);
  };

  const updatePostImageUrl = (e) => {
    setPostImageUrl(e.target.value);
  };

  const handleInputFocus = (e) => {
    e.target.classList.add("add_post_field_focus");
  };

  if (!token) {
    return <Redirect to="/signin" />;
  }

  const thePost = posts[currentPostId];
  if (!thePost) return null;

  return (
    <>
      <AppBar position="static" className={classes.main__appbar}>
        <Toolbar>
          <IconButton
            aria-describedby={id}
            type="button"
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={handleAddPostClick}
          >
            <AddAPhotoIcon
              color="primary"
              className={classes.main__appbar_icons}
            />
          </IconButton>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <form className="add_post_form" noValidate autoComplete="off">
              <textarea
                className="add_post_content"
                name="add_post_content"
                id="add_post_content"
                placeholder="Describe your image ..."
                value={postContent}
                onChange={updatePostContent}
                onFocus={handleInputFocus}
                rows="5"
                cols="33"
              />
              <div className="add_post_actions">
                <label
                  htmlFor="add_post_photo_upload"
                  className="add_post_photo_upload"
                >
                  <input
                    accept="image/*"
                    id="add_post_photo_upload"
                    type="file"
                  />
                  Upload
                </label>
                {/* <IconButton aria-label="create post" onClick={handleCreatePost}>
                  <SendIcon color="secondary" />
                </IconButton> */}
                <button
                  aria-label="create post"
                  className="add_post_action_button"
                  onClick={handleCreatePost}
                >
                  Post
                </button>
                <button
                  aria-label="close dialog"
                  className="add_post_action_button"
                  onClick={handleAddPostClick}
                >
                  Close
                </button>

                {/* <IconButton
                  aria-label="close dialog"
                  onClick={handleAddPostClick}
                >
                  <CloseIcon color="secondary" />
                </IconButton> */}
              </div>
            </form>
          </Popper>
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
