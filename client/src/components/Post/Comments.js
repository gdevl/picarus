import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import SendIcon from '@material-ui/icons/Send';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import AddCommentIcon from '@material-ui/icons/AddComment';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import { createComment } from '../../store/actions/posts';
import DisplayComments from './DisplayComments';

const Comments = ({ expanded, postComments }) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');
    const currentUserId = useSelector((state) => state.authentication.user.id);
    const currentPostId = useSelector((state) => state.posts.currentPostId);

    const handleAddComment = async (e) => {
        e.preventDefault();
        const comment = {
            content: commentText,
            uid: currentUserId,
            pid: currentPostId,
        };

        await dispatch(createComment(comment));
    };

    const updateCommentText = (e) => {
        setCommentText(e.target.value);
    };

    const handleInputFocus = (e) => {
        e.target.classList.add('post__comment_text_focus');
    };

    return (
        <>
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
                    <DisplayComments postComments={postComments} />
                </CardContent>
            </Collapse>
        </>
    );
};

export default Comments;
