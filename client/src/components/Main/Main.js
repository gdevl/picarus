import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Tooltip from '@material-ui/core/Tooltip';
import Post from '../Post/Post';
import Navigation from './Navigation';
import Footer from './Footer';

import {
    createPost,
    fetchPosts,
    setCurrentPost,
} from '../../store/actions/posts';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        backgroundColor: '#222',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    cardMedia: {
        height: '90%',
        margin: 'auto',
        width: '90%',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#222',
        borderTop: '1px solid #C678DD',
        padding: theme.spacing(1),
    },
    footer__appBar: {
        alignItems: 'center',
        backgroundColor: '#222',
        borderTop: '1px solid #C678DD',
        padding: theme.spacing(1),
        top: 'auto',
        bottom: 0,
    },
    footer__appBar_iconbuttons: {
        margin: '0 0.25rem',
    },
    grow: {
        flexGrow: 1,
    },
    hidden: {
        opacity: 0,
        pointerEvents: 'none',
    },
}));

const Main = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentUserId = useSelector((state) => state.authentication.user.id);
    const token = useSelector((state) => state.authentication.token);
    const posts = useSelector((state) => state.posts);
    const ids = useSelector((state) => state.posts.ids);
    const currentUserDisplayName = useSelector(
        (state) => state.authentication.user.displayName
    );
    const currentPostId = useSelector((state) => state.posts.currentPostId);
    const postIndex = useRef(null);

    // Add post form toggle defs
    const [image, setImage] = useState(null);
    const [postContent, setPostContent] = useState('');
    const [postImageUrl, setPostImageUrl] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    useEffect(() => {
        dispatch(fetchPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        postIndex.current = ids.length - 1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ids]);

    useEffect(() => {
        dispatch(setCurrentPost(ids[postIndex.current]));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ids]);

    const handleCreatePost = async (e) => {
        e.preventDefault();
        const postData = new FormData();
        postData.append('file', image);
        postData.append('uid', currentUserId);
        postData.append('content', postContent);

        await dispatch(createPost(postData));
        dispatch(setCurrentPost(Number(ids[ids.length - 1])));
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };

    const handleAddPostClick = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };

    const handleLinkedInClick = () => {
        return (window.location.href =
            'https://www.linkedin.com/in/gabriel-lane-4120651bb/');
    };

    const handleGitHubClick = () => {
        return (window.location.href = 'https://github.com/gdevl/picarus');
    };

    const handleNextPost = () => {
        if (postIndex.current === 0) {
            postIndex.current = ids.length - 1;
        } else {
            postIndex.current--;
        }
        dispatch(setCurrentPost(ids[postIndex.current]));
    };

    const handlePreviousPost = () => {
        if (postIndex.current === ids.length - 1) {
            postIndex.current = 0;
        } else {
            postIndex.current++;
        }
        dispatch(setCurrentPost(ids[postIndex.current]));
    };

    const updatePostContent = (e) => {
        setPostContent(e.target.value);
    };

    const updatePostImageUrl = (e) => {
        setPostImageUrl(e.target.value);
    };

    const handleInputFocus = (e) => {
        e.target.classList.add('add_post_field_focus');
    };

    if (!token) {
        return <Redirect to="/signin" />;
    }

    const thePost = posts[currentPostId];
    if (!thePost) return null;

    return (
        <>
            <Navigation currentUserId={currentUserId} ids={ids} />
            <main className="main__container">
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4} justify="center" align="center">
                        <div className="main__container_detail_row">
                            <div id="main__container_detail_row_prev_post">
                                <Tooltip title="Previous">
                                    <IconButton
                                        color="primary"
                                        className="main__appbar_icons"
                                        aria-label="previous post"
                                        data-tooltip="previous post"
                                        component="span"
                                        onClick={handlePreviousPost}
                                    >
                                        <NavigateBeforeIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="main__container_detail_row_text">{`${currentUserDisplayName}'s Feed`}</div>
                            <div id="main__container_detail_row_next_post">
                                <Tooltip title="Next">
                                    <IconButton
                                        color="primary"
                                        className="main__appbar_icons"
                                        aria-label="upload picture"
                                        component="span"
                                        onClick={handleNextPost}
                                    >
                                        <NavigateNextIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <Grid item xs={12}>
                            {thePost ? (
                                <Post
                                    key={`post ${thePost.id}`}
                                    post={thePost}
                                />
                            ) : null}
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default Main;
