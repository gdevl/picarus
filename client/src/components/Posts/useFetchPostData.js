import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/actions/posts';
import { fetchFollowingPosts } from '../../store/actions/following';
import { fetchUserPosts } from '../../store/actions/myposts';

export default function useFetchPostData(userId, view) {
    const [status, setStatus] = useState('idle');

    const dispatch = useDispatch();
    const allposts = useSelector((state) => state.posts);
    const myposts = useSelector((state) => state.myposts);
    const followingposts = useSelector((state) => state.followingposts);

    // fetches all my posts (or any user's posts)
    useEffect(() => {
        if (view === 'me') {
            dispatch(fetchUserPosts(userId));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [view]);

    // fetches posts by those I'm following
    useEffect(() => {
        if (view === 'followers') {
            dispatch(fetchFollowingPosts(userId));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [view]);

    // fetches all posts
    useEffect(() => {
        if (view === 'all') dispatch(fetchPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [view]);

    return {
        posts,
        myposts,
        followingposts,
    };
}
