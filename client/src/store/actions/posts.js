import { backendUrl } from '../../config';
export const SET_POSTS = 'picarus/posts/SET_POSTS';
export const ADD_POST = 'picarus/posts/ADD_POST';
export const REMOVE_POST = 'picarus/posts/REMOVE_POST';
export const SET_CURRENT_POST = 'picarus/posts/SET_CURRENT_POST';
export const ADD_COMMENT = 'picarus/post/ADD_COMMENT';
export const REMOVE_COMMENT = 'picarus/post/REMOVE_COMMENT';
export const ADD_POST_LIKE = 'picarus/post/ADD_POST_LIKE';
export const REMOVE_POST_LIKE = 'picarus/post/REMOVE_POST_LIKE';

export const addComment = (comment) => ({ type: ADD_COMMENT, comment });
export const removeComment = (comment) => ({
    type: REMOVE_COMMENT,
    comment,
});
export const addPostLike = (postLike) => ({ type: ADD_POST_LIKE, postLike });
export const removePostLike = (postLike) => ({
    type: REMOVE_POST_LIKE,
    postLike,
});
export const setPosts = (posts) => ({ type: SET_POSTS, posts });
export const addPost = (post) => ({ type: ADD_POST, post });
export const removePost = (post) => ({ type: REMOVE_POST, post });
export const setCurrentPost = (postId) => ({ type: SET_CURRENT_POST, postId });

export const fetchPosts = () => async (dispatch) => {
    const response = await fetch(`${backendUrl}/api/posts`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        const res = await response.json();
        dispatch(setPosts(res));
    }
};

export const createComment = (comment) => async (dispatch) => {
    const { content, uid, pid } = comment;
    const response = await fetch(`${backendUrl}/api/comments`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, uid, pid }),
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(addComment(comment));
    }
};

export const createPost = (postData) => async (dispatch) => {
    const response = await fetch(`${backendUrl}/api/posts`, {
        method: 'post',
        body: postData,
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(addPost(post));
    }
};

export const createPostLike = (postLike) => async (dispatch) => {
    const { uid, pid } = postLike;
    const response = await fetch(`${backendUrl}/api/postlikes`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, pid }),
    });

    if (response.ok) {
        const postLike = await response.json();
        dispatch(addPostLike(postLike));
    }
};

export const deletePost = (postData) => async (dispatch) => {
    const { pid } = postData;
    const response = await fetch(`${backendUrl}/api/posts/${pid}`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pid }),
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(removePost(post));
    }
};

export const deletePostLike = (postLikeData) => async (dispatch) => {
    const { userId, postId } = postLikeData;
    const response = await fetch(`${backendUrl}/api/postlikes/`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, postId }),
    });

    if (response.ok) {
        const postLike = await response.json();
        dispatch(removePostLike(postLike));
    }
};

export const deleteComment = (commentData) => async (dispatch) => {
    const { userId, postId } = commentData;
    const response = await fetch(`${backendUrl}/api/comments/`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, postId }),
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(removeComment(comment));
    }
};
