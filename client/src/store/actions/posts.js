import { backendUrl } from "../../config";
export const SET_POSTS = "picarus/posts/SET_POSTS";
export const ADD_POST = "picarus/posts/ADD_POST";
export const REMOVE_POST = "picarus/posts/REMOVE_POST";
export const SET_CURRENT_POST = "picarus/posts/SET_CURRENT_POST";
export const ADD_COMMENT = "picarus/post/ADD_COMMENT";

export const addComment = (comment) => ({ type: ADD_COMMENT, comment });
export const setPosts = (posts) => ({ type: SET_POSTS, posts });
export const addPost = (post) => ({ type: ADD_POST, post });
export const removePost = (postId) => ({ type: REMOVE_POST, postId });
export const setCurrentPost = (postId) => ({ type: SET_CURRENT_POST, postId });

export const fetchPosts = () => async (dispatch) => {
  // debugger;
  const response = await fetch(`${backendUrl}/api/posts`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    const res = await response.json();
    // console.log(res)
    dispatch(setPosts(res));
  }
};

export const createComment = (content, uid, pid) => async (dispatch) => {
  // debugger;
  const response = await fetch(`${backendUrl}/api/comments`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, uid, pid }),
  });

  if (response.ok) {
    const comment = await response.json();
    // console.log(res)
    dispatch(addComment(comment));
  }
};
