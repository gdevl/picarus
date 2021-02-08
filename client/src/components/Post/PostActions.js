import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import LikeActions from './LikeActions';
import Comments from './Comments';

const useStyles = makeStyles((theme) => ({
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
    buttonHoverColor: {
        '&hover': {
            color: 'rgba(198, 120, 221, 1) !important',
        },
    },
}));

const PostActions = ({ currentUserId, post }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

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

    return (
        <>
            <div className="post__actions">
                <LikeActions
                    post={post}
                    userLikes={userLikes}
                    postLikes={postLikes}
                />
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
            <Comments expanded={expanded} postComments={postComments} />
        </>
    );
};

export default PostActions;
