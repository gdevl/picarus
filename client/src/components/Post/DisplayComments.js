import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import { deleteComment } from '../../store/actions/posts';

const DisplayComments = ({ postComments }) => {
    const dispatch = useDispatch();
    const currentUserId = useSelector((state) => state.authentication.user.id);
    const currentPostId = useSelector((state) => state.posts.currentPostId);
    const handleRemoveComment = async (e) => {
        e.preventDefault();
        const commentData = {
            userId: currentUserId,
            postId: currentPostId,
        };

        await dispatch(deleteComment(commentData));
    };

    return (
        <>
            {postComments.map((comment) => (
                <div className="post__comments">
                    <div
                        className="post__comment_author"
                        key={`c-a-${comment.id}`}
                    >
                        {comment.User ? comment.User.displayName : 'user'}
                    </div>
                    <div
                        className="post__comment_elapsed"
                        key={`c-ca-${comment.id}`}
                    >
                        {`(${comment.createdAt})`}
                    </div>
                    <div className="post__comment" key={`c-${comment.id}`}>
                        <p className="post__comment-text">{comment.content}</p>
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
        </>
    );
};

export default DisplayComments;
