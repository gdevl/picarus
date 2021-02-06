import React, { useState } from 'react';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';

const AddPostForm = () => {
    const [postContent, setPostContent] = useState('');
    const [postImageUrl, setPostImageUrl] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleCreatePost = async (e) => {
        e.preventDefault();
        const post = {
            uid: currentUserId,
            content: postContent,
            imageUrl: postImageUrl,
        };

        await dispatch(createPost(post));
    };

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <button aria-describedby={id} type="button" onClick={handleClick}>
                Toggle Popper
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div className={classes.paper}>The content of the Popper.</div>
            </Popper>
        </div>
    );
};
export default AddPostForm;
