import { backendUrl } from "../../config";
export const SET_POSTS = "picarus/posts/SET_POSTS";
export const ADD_POST = "picarus/posts/ADD_POST";
export const REMOVE_POST = "picarus/posts/REMOVE_POST";
export const SET_CURRENT_POST = "picarus/posts/SET_CURRENT_POST";

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
