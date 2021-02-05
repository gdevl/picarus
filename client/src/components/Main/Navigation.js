import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import LogoutButton from './LogoutButton';
import Logo from '../Logo/Logo';
import UploadImage from '../Post/UploadImage';
import Popper from '@material-ui/core/Popper';
import { createPost, setCurrentPost } from '../../store/actions/posts';

const useStyles = makeStyles((theme) => ({
    main__appbar: {
        borderBottom: '1px solid #C678DD',
        justifyContent: 'space-between',
        flexFlow: 'row nowrap',
        backgroundColor: '#222',
    },
}));

const Navigation = ({ currentUserId, ids }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    // Add post form toggle defs
    const [image, setImage] = useState(null);
    const [postContent, setPostContent] = useState('');
    const [captionContent, setCaptionContent] = useState('');
    const [postImageUrl, setPostImageUrl] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleCreatePost = async (e) => {
        e.preventDefault();
        const postData = new FormData();
        postData.append('file', image);
        postData.append('uid', currentUserId);
        postData.append('content', postContent);
        postData.append('caption', captionContent);

        await dispatch(createPost(postData));
        dispatch(setCurrentPost(Number(ids[ids.length - 1])));
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };

    const handleAddPostClick = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };

    const updatePostContent = (e) => {
        setPostContent(e.target.value);
    };

    const updateCaptionContent = (e) => {
        setCaptionContent(e.target.value);
    };

    const updatePostImageUrl = (e) => {
        setPostImageUrl(e.target.value);
    };

    const handleInputFocus = (e) => {
        e.target.classList.add('add_post_field_focus');
    };

    return (
        <>
            <AppBar position="static" className={classes.main__appbar}>
                <Toolbar>
                    <Tooltip title="Create Post">
                        <IconButton
                            aria-describedby={id}
                            type="button"
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            onClick={handleAddPostClick}
                        >
                            <AddAPhotoIcon
                                color="primary"
                                className="main__appbar_icons"
                            />
                        </IconButton>
                    </Tooltip>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <form
                            className="add_post_form"
                            noValidate
                            autoComplete="off"
                        >
                            <textarea
                                className="add_post_content pad-my-bottom"
                                name="add_caption_content"
                                id="add_caption_content"
                                placeholder="Add a caption ..."
                                value={captionContent}
                                onChange={updateCaptionContent}
                                onFocus={handleInputFocus}
                                rows="1"
                                cols="33"
                            />
                            <textarea
                                className="add_post_content"
                                name="add_post_content"
                                id="add_post_content"
                                placeholder="Describe your image ..."
                                value={postContent}
                                onChange={updatePostContent}
                                onFocus={handleInputFocus}
                                rows="5"
                                cols="33"
                            />

                            <div className="add_post_actions">
                                <UploadImage
                                    image={image}
                                    setImage={setImage}
                                />
                                <button
                                    aria-label="create post"
                                    className="add_post_action_button"
                                    onClick={handleCreatePost}
                                >
                                    Post
                                </button>
                                <button
                                    aria-label="close dialog"
                                    className="add_post_action_button"
                                    onClick={handleAddPostClick}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </Popper>
                </Toolbar>
                <Logo />
                <Toolbar>
                    <LogoutButton />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navigation;
