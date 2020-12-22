import { backendUrl } from "../../config";
export const SET_POSTS = "picarus/posts/SET_POSTS";
export const ADD_POST = "picarus/posts/ADD_POST";
export const REMOVE_POST = "picarus/posts/REMOVE_POST";
export const SET_CURRENT_POST = "picarus/posts/SET_CURRENT_POST";
export const ADD_COMMENT = "picarus/post/ADD_COMMENT";
export const ADD_POST_LIKE = "picarus/post/ADD_POST_LIKE";

export const addComment = (comment) => ({ type: ADD_COMMENT, comment });
export const addPostLike = (postLike) => ({ type: ADD_POST_LIKE, postLike });
export const setPosts = (posts) => ({ type: SET_POSTS, posts });
export const addPost = (post) => ({ type: ADD_POST, post });
export const removePost = (postId) => ({ type: REMOVE_POST, postId });
export const setCurrentPost = (postId) => ({ type: SET_CURRENT_POST, postId });

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch(`${backendUrl}/api/posts`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    const res = await response.json();
    dispatch(setPosts(res));
  }
};

export const createComment = (comment) => async (dispatch) => {
  const { content, uid, pid } = comment;
  const response = await fetch(`${backendUrl}/api/comments`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, uid, pid }),
  });

  if (response.ok) {
    const comment = await response.json();
    dispatch(addComment(comment));
  }
};

export const createPost = (post) => async (dispatch) => {
  const { uid, content, image } = post;
  const response = await fetch(`${backendUrl}/api/posts`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid, content, image }),
  });

  if (response.ok) {
    const post = await response.json();
    dispatch(addPost(post));
  }
};

export const createPostLike = (postLike) => async (dispatch) => {
  const { uid, pid } = postLike;
  const response = await fetch(`${backendUrl}/api/postlikes`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid, pid }),
  });

  if (response.ok) {
    const postLike = await response.json();
    dispatch(addPostLike(postLike));
  }
};
