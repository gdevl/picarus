import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddCommentIcon from "@material-ui/icons/AddComment";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import Popper from "@material-ui/core/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@material-ui/core/Fade";

import { setCurrentPost, addComment } from "../../store/actions/posts";

const useStyles = makeStyles((theme) => ({
  post__container: {
    backgroundColor: "#222",
    // backgroundColor: "transparent",
    border: "1px solid rgba(97, 175, 239, 0.2);",
    // border: "1px solid #C678DD",
    color: "#fff",
    maxWidth: 345,
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  media: {
    borderRadius: "4px",
    height: 0,
    // height: "100%",
    paddingTop: "100%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  post__author: {
    color: "#61AFEF",
    display: "inline !important",
    fontFamily: "Josefin Sans !important",
    fontSize: "0.875rem !important",
    fontWeight: "700 !important",
  },
  post__content: {
    // backgroundColor: "rgba(97, 175, 239, 1)",
    // border: "1px solid #333",
    borderRadius: "4px",
    // color: "rgba(97, 175, 239, 1) !important",
    padding: "0.5rem 0",
  },
}));

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.authentication.user.id);
  const currentPostId = useSelector((state) => state.posts.currentPostId);
  // const [postId, setPostId] = useState(post.id);
  const [expanded, setExpanded] = useState(false);
  const [commentText, setCommentText] = useState("");
  
  // useEffect(() => {
  //   dispatch(setCurrentPost(post.id));
  //   // setCurrentPostId(post.id);
  // }, [])
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    // console.log("postId:");
    // console.log(postId);
    console.log("currentPostId:")
    console.log(currentPostId);
    const comment = {
      content: commentText,
      uid: currentUserId,
      pid: currentPostId
    }

    if (comment) {
      (async () => {
        dispatch(addComment(comment));
      })();
    }
  };

  const updateCommentText = (e) => {
    setCommentText(e.target.value);
  };

  const handleInputFocus = (e) => {
    e.target.classList.add("post__comment_text_focus");
  };

  // const content = posts.postIds[1].content;
  // const caption = posts.postIds[1].content;

  return (
    <Card className={classes.post__container}>
      <div className="post__header">
        <p className="post__author">{post.User.displayName}</p>
        <p className="post__creation">{post.createdAt}</p>
      </div>
      <CardMedia
        className={classes.media}
        image={post.imageUrl}
        title="Image Title"
      />
      <CardContent>
        <Typography
          className={classes.post__content}
          variant="body2"
          color="textSecondary"
          component="p"
          align="left"
        >
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like this post">
          {/* <FavoriteIcon color="primary" /> */}
          <FavoriteBorderIcon color="secondary" />
          <div className="post__likes">{post.PostLikes.length}</div>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CommentIcon color="secondary" />
          <div className="post__comment_total">{post.Comments.length}</div>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div className="post__comments_meta_row">
            <p className="post_comments_meta_num">
              {post.Comments.length !== 1
                ? `${post.Comments.length} COMMENTS`
                : `${post.Comments.length} COMMENT`}
            </p>
            <PopupState variant="popper" popupId="post__add_comment">
              {(popupState) => (
                <div className="post__comment_add">
                  <IconButton
                    aria-label="add a comment"
                    {...bindToggle(popupState)}
                  >
                    <AddCommentIcon color="secondary" />
                  </IconButton>
                  <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <form
                          className="post__comment_add_form"
                          noValidate
                          autoComplete="off"
                        >
                          <input
                            className="post__comment_add_text"
                            name="add_comment"
                            id="add_comment"
                            placeholder="Say something ..."
                            value={commentText}
                            onChange={updateCommentText}
                            onFocus={handleInputFocus}
                          />
                          <div className="post__comment_add_actions">
                            <IconButton
                              aria-label="like this post"
                              onClick={handleAddComment}
                            >
                              <SendIcon color="secondary" />
                            </IconButton>
                            <IconButton
                              aria-label="add a comment"
                              {...bindToggle(popupState)}
                            >
                              <CloseIcon color="secondary" />
                            </IconButton>
                          </div>
                        </form>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>
          </div>
          {post.Comments.map((comment) => (
            <div className="post__comments">
              <div className="post__comment_author" key={`c-a-${comment.id}`}>
                {comment.User.displayName ? comment.User.displayName : 'user'}
              </div>
              <div className="post__comment_elapsed" key={`c-ca-${comment.id}`}>
                {`(${comment.createdAt})`}
              </div>
              <div className="post__comment" key={`c-${comment.id}`}>
                {comment.content}
              </div>
            </div>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
