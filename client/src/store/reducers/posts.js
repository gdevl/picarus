import {
  SET_POSTS,
  ADD_POST,
  REMOVE_POST,
  SET_CURRENT_POST,
} from "../actions/posts";

const initialState = {
  currentPostId: null,
};

export default function reducer(state = initialState, action) {
  let nextState = { ...state };
  console.log("ACTION.posts");
  console.log(action.posts);
  switch (action.type) {
    case SET_POSTS:
      return {
        ...action.posts,
      };
    case ADD_POST:
      nextState.posts[action.post.id] = action.post;
      return nextState;
    case REMOVE_POST:
      delete nextState.posts[action.postId];
      return nextState;
    case SET_CURRENT_POST:
      nextState.currentPostId = action.postId;
      return nextState;
    default:
      return state;
  }
}
