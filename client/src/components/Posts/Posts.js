import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Tooltip from '@material-ui/core/Tooltip';
import Post from '../Post/Post';
import { setCurrentPost } from '../../store/actions/posts';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
    },
}));

const Posts = ({ posts, scope, view }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentPostId = useSelector((state) => state.posts.currentPostId);
    const postIndex = useRef(null);

    const handleNextPost = () => {
        if (postIndex.current === 0) {
            postIndex.current = scope.length - 1;
        } else {
            postIndex.current--;
        }
        dispatch(setCurrentPost(scope[postIndex.current]));
    };

    const handlePreviousPost = () => {
        if (postIndex.current === scope.length - 1) {
            postIndex.current = 0;
        } else {
            postIndex.current++;
        }
        dispatch(setCurrentPost(scope[postIndex.current]));
    };

    useEffect(() => {
        postIndex.current = scope.length - 1;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scope]);

    useEffect(() => {
        dispatch(setCurrentPost(scope[postIndex.current]));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scope]);

    const thePost = posts[currentPostId];
    if (!thePost) return null;

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} justify="center" align="center">
                <div className="main__container_detail_row">
                    {scope.length > 1 ? (
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
                    ) : null}
                    <div className="main__container_detail_row_text">
                        {view}
                    </div>
                    {scope.length > 1 ? (
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
                    ) : null}
                </div>
                <Grid item xs={12}>
                    {thePost ? (
                        <Post key={`post ${thePost.id}`} post={thePost} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Posts;
