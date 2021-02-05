import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCommentIcon from '@material-ui/icons/AddComment';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';

import {
    setCurrentPost,
    createComment,
    deleteComment,
    createPostLike,
    deletePostLike,
    deletePost,
} from '../../store/actions/posts';

const useStyles = makeStyles((theme) => ({
    post__container: {
        backgroundColor: '#222',
        // backgroundColor: "transparent",
        border: '1px solid rgba(97, 175, 239, 0.2)',
        // border: "1px solid #C678DD",
        color: '#fff',
        maxWidth: 345,
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    media: {
        borderRadius: '4px',
        height: 0,
        // height: "100%",
        paddingTop: '100%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    post__author: {
        color: '#61AFEF',
        display: 'inline !important',
        fontFamily: 'Josefin Sans !important',
        fontSize: '0.875rem !important',
        fontWeight: '700 !important',
    },
    post__content: {
        borderRadius: '4px',
        padding: '0.5rem 0',
    },
    userLikesPost: {
        pointerEvents: 'none !important',
    },
    buttonHoverColor: {
        '&hover': {
            color: 'rgba(198, 120, 221, 1) !important',
        },
    },
}));

const Post = ({ post }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentUserId = useSelector((state) => state.authentication.user.id);
    const currentPostId = useSelector((state) => state.posts.currentPostId);
    const [expanded, setExpanded] = useState(false);
    const [commentText, setCommentText] = useState('');

    let postLikes = [];
    const userLikes = [];
    if (post.PostLikes) {
        postLikes = post.PostLikes;
        postLikes.forEach((postLike) => {
            if (postLike.uid === currentUserId) {
                userLikes.push(postLike.pid);
            }
        });
    }

    let postComments = [];
    if (post.Comments) {
        postComments = post.Comments;
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleAddComment = async (e) => {
        e.preventDefault();
        const comment = {
            content: commentText,
            uid: currentUserId,
            pid: currentPostId,
        };

        await dispatch(createComment(comment));
    };

    const handleRemoveComment = async (e) => {
        e.preventDefault();
        const commentData = {
            userId: currentUserId,
            postId: currentPostId,
        };

        await dispatch(deleteComment(commentData));
    };

    const handleDeletePost = async (e) => {
        e.preventDefault();
        const postData = {
            pid: currentPostId,
        };
        await dispatch(deletePost(postData));
    };

    const handlePostLike = async (e) => {
        e.preventDefault();
        const postLike = {
            uid: currentUserId,
            pid: currentPostId,
        };

        await dispatch(createPostLike(postLike));
    };

    const handlePostUnlike = async (e) => {
        e.preventDefault();
        const postLike = {
            userId: currentUserId,
            postId: currentPostId,
        };

        await dispatch(deletePostLike(postLike));
    };

    const updateCommentText = (e) => {
        setCommentText(e.target.value);
    };

    const handleInputFocus = (e) => {
        e.target.classList.add('post__comment_text_focus');
    };

    return (
        <Card className={classes.post__container}>
            <div className="post__header">
                <p className="post__author">
                    {post.uid === currentUserId ? `you` : post.User.displayName}
                </p>
                <p className="post__creation">{`(${post.createdAt})`}</p>
            </div>
            <CardMedia
                className={classes.media}
                image={post.imageUrl}
                title="Image Title"
            >
                {post.uid === currentUserId ? (
                    <Tooltip title="Delete">
                        <IconButton
                            aria-label="delete this post"
                            onClick={handleDeletePost}
                            className="post__actions-delete"
                        >
                            <RemoveCircleOutlineIcon color="primary" />
                        </IconButton>
                    </Tooltip>
                ) : null}
            </CardMedia>
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
            {/* <CardActions className="post__actions" disableSpacing> */}
            <div className="post__actions">
                {userLikes.includes(post.id) ? (
                    <Tooltip title="Remove Like">
                        <IconButton
                            aria-label="you like this post"
                            onClick={handlePostUnlike}
                            className="post__actions-like"
                        >
                            <FavoriteIcon color="primary" />
                            <div className="post__likes">
                                {postLikes.length}
                            </div>
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Like Post">
                        <IconButton
                            aria-label="like this post"
                            onClick={handlePostLike}
                            className="post__actions-like"
                        >
                            <FavoriteBorderIcon color="primary" />
                            <div className="post__likes">
                                {postLikes.length}
                            </div>
                        </IconButton>
                    </Tooltip>
                )}
                <Tooltip title="Show/Hide Comments">
                    <div className="post__actions-comments">
                        <IconButton
                            className={clsx(
                                classes.expand,
                                classes.buttonHoverColor,
                                {
                                    [classes.expandOpen]: expanded,
                                }
                            )}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <CommentIcon
                                color="secondary"
                                className="main__appbar_icons_alt"
                            />
                            <div className="post__comment_total">
                                {postComments.length}
                            </div>
                        </IconButton>
                    </div>
                </Tooltip>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div className="post__comments_meta_row">
                        <p className="post_comments_meta_num">
                            {postComments.length !== 1
                                ? `${postComments.length} COMMENTS`
                                : `${postComments.length} COMMENT`}
                        </p>
                        <PopupState
                            variant="popper"
                            popupId="post__add_comment"
                        >
                            {(popupState) => (
                                <div className="post__comment_add">
                                    <Tooltip title="Add Comment">
                                        <IconButton
                                            aria-label="add a comment"
                                            {...bindToggle(popupState)}
                                        >
                                            <AddCommentIcon
                                                color="secondary"
                                                className="main__appbar_icons_alt"
                                            />
                                        </IconButton>
                                    </Tooltip>
                                    <Popper
                                        {...bindPopper(popupState)}
                                        transition
                                    >
                                        {({ TransitionProps }) => (
                                            <Fade
                                                {...TransitionProps}
                                                timeout={350}
                                            >
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
                                                        onChange={
                                                            updateCommentText
                                                        }
                                                        onFocus={
                                                            handleInputFocus
                                                        }
                                                    />
                                                    <div className="post__comment_add_actions">
                                                        <Tooltip title="Submit">
                                                            <IconButton
                                                                aria-label="add a comment"
                                                                onClick={
                                                                    handleAddComment
                                                                }
                                                            >
                                                                <SendIcon
                                                                    color="secondary"
                                                                    className="main__appbar_icons_alt"
                                                                    {...bindToggle(
                                                                        popupState
                                                                    )}
                                                                />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Cancel">
                                                            <IconButton
                                                                aria-label="Cancel"
                                                                {...bindToggle(
                                                                    popupState
                                                                )}
                                                            >
                                                                <CloseIcon
                                                                    color="secondary"
                                                                    className="main__appbar_icons_alt"
                                                                />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </div>
                                                </form>
                                            </Fade>
                                        )}
                                    </Popper>
                                </div>
                            )}
                        </PopupState>
                    </div>
                    {postComments.map((comment) => (
                        <div className="post__comments">
                            <div
                                className="post__comment_author"
                                key={`c-a-${comment.id}`}
                            >
                                {comment.User
                                    ? comment.User.displayName
                                    : 'user'}
                            </div>
                            <div
                                className="post__comment_elapsed"
                                key={`c-ca-${comment.id}`}
                            >
                                {`(${comment.createdAt})`}
                            </div>
                            <div
                                className="post__comment"
                                key={`c-${comment.id}`}
                            >
                                <p className="post__comment-text">
                                    {comment.content}
                                </p>
                                {comment.uid === currentUserId ? (
                                    <Tooltip title="Cancel">
                                        <IconButton
                                            className="post__comment-delete"
                                            aria-label="delete"
                                            onClick={handleRemoveComment}
                                        >
                                            <CloseIcon
                                                color="primary"
                                                className="post__comment-delete-icon"
                                            />
                                        </IconButton>
                                    </Tooltip>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default Post;
