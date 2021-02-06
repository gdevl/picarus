import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Posts from '../Posts/Posts';
import ViewMenu from '../Posts/ViewMenu';

import { fetchPosts } from '../../store/actions/posts';
import { fetchFollows, fetchMyPosts } from '../../store/actions/authentication';

const Main = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState('public');
    const currentUserId = useSelector((state) => state.authentication.user.id);
    const token = useSelector((state) => state.authentication.token);
    const posts = useSelector((state) => state.posts);

    // use these arrays for filtering...
    // post carousel is currently using the ids array for post carousel
    // so conditionally switch that array

    // if view === following, use follows
    // if view === public, use ids
    // if view === me, use me
    const follows = useSelector((state) => state.authentication.follows);
    const myPosts = useSelector((state) => state.authentication.myPosts);
    const ids = useSelector((state) => state.posts.ids);
    const [scope, setScope] = useState([]);

    useEffect(() => {
        dispatch(fetchPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!currentUserId) return;
        dispatch(fetchFollows(currentUserId));
        dispatch(fetchMyPosts(currentUserId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setLoading(false);
    }, [currentUserId]);

    useEffect(() => {
        if (view === 'following') {
            setScope(follows);
        } else if (view === 'me') {
            setScope(myPosts);
        } else {
            setScope(ids);
        }
    }, [view]);

    if (!token) {
        return <Redirect to="/signin" />;
    }

    return (
        <>
            {!loading ? (
                <>
                    <Navigation currentUserId={currentUserId} ids={ids} />
                    <main className="main__container">
                        <ViewMenu view={view} setView={setView} />
                        {ids.length ? (
                            <Posts
                                posts={posts}
                                scope={scope.length ? scope : ids}
                                view={view}
                            />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </main>
                    <Footer />
                </>
            ) : (
                <p>Loading</p>
            )}
        </>
    );
};

export default Main;
