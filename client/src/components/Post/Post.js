import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
import FollowActions from './FollowActions';
import PostActions from './PostActions';
import { deletePost } from '../../store/actions/posts';

const useStyles = makeStyles((theme) => ({
    post__container: {
        backgroundColor: '#222',
        border: '1px solid rgba(97, 175, 239, 0.2)',
        color: '#fff',
        maxWidth: 345,
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    media: {
        borderRadius: '4px',
        height: 0,
        paddingTop: '100%', // 16:9
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
}));

const Post = ({ post }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentUserId = useSelector((state) => state.authentication.user.id);
    const currentPostId = useSelector((state) => state.posts.currentPostId);
    const follows = useSelector((state) => state.authentication.follows);

    const handleDeletePost = async (e) => {
        e.preventDefault();
        const postData = {
            pid: currentPostId,
        };
        await dispatch(deletePost(postData));
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
                title={post.caption}
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
                ) : (
                    <FollowActions
                        currentUserId={currentUserId}
                        post={post}
                        follows={follows}
                    />
                )}
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
            <PostActions
                post={post}
                currentPostId={currentPostId}
                currentUserId={currentUserId}
            />
        </Card>
    );
};

export default Post;
