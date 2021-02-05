import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Posts from '../Posts/Posts';
import ViewMenu from '../Posts/ViewMenu';

import { fetchPosts } from '../../store/actions/posts';

const Main = () => {
    const dispatch = useDispatch();
    const [view, setView] = useState('public');
    const currentUserId = useSelector((state) => state.authentication.user.id);
    const token = useSelector((state) => state.authentication.token);
    const posts = useSelector((state) => state.posts);
    const ids = useSelector((state) => state.posts.ids);

    useEffect(() => {
        dispatch(fetchPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!token) {
        return <Redirect to="/signin" />;
    }

    return (
        <>
            <Navigation currentUserId={currentUserId} ids={ids} />
            <main className="main__container">
                <ViewMenu view={view} setView={setView} />
                <Posts posts={posts} ids={ids} view={view} />
            </main>
            <Footer />
        </>
    );
};

export default Main;
