import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../store/actions/authentication';

const FollowActions = ({ currentUserId, follows, post }) => {
    const dispatch = useDispatch();
    const handleFollowUser = async (e) => {
        e.preventDefault();
        const followData = {
            uid: post.uid,
            fid: currentUserId,
        };

        await dispatch(followUser(followData));
    };

    const handleUnfollowUser = async (e) => {
        e.preventDefault();
        const unfollowData = {
            userId: post.uid,
            followerId: currentUserId,
        };

        await dispatch(unfollowUser(unfollowData));
    };

    return (
        <>
            {follows.includes(post.uid) ? (
                <Tooltip title="Stop Following">
                    <IconButton
                        aria-label="Stop following this user"
                        onClick={handleUnfollowUser}
                        className="post__actions-unfollow"
                    >
                        <CheckCircleIcon color="secondary" />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Follow This User">
                    <IconButton
                        aria-label="Follow this user"
                        onClick={handleFollowUser}
                        className="post__actions-follow"
                    >
                        <AddCircleIcon color="secondary" />
                    </IconButton>
                </Tooltip>
            )}
        </>
    );
};

export default FollowActions;
