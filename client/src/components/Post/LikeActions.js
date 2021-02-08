import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { createPostLike, deletePostLike } from '../../store/actions/posts';

const LikeActions = ({ post, postLikes, userLikes }) => {
    const dispatch = useDispatch();
    const currentUserId = useSelector((state) => state.authentication.user.id);
    const currentPostId = useSelector((state) => state.posts.currentPostId);

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

    return (
        <>
            {userLikes.includes(post.id) ? (
                <Tooltip title="Remove Like">
                    <IconButton
                        aria-label="you like this post"
                        onClick={handlePostUnlike}
                        className="post__actions-like"
                    >
                        <FavoriteIcon color="primary" />
                        <div className="post__likes">{postLikes.length}</div>
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
                        <div className="post__likes">{postLikes.length}</div>
                    </IconButton>
                </Tooltip>
            )}
        </>
    );
};

export default LikeActions;
