import {
  SET_POSTS,
  ADD_POST,
  REMOVE_POST,
  SET_CURRENT_POST,
  ADD_COMMENT,
} from "../actions/posts";

const initialState = {
  currentPostId: null,
  ids: [],
};

export default function reducer(state = initialState, action) {
  let nextState = { ...state };
  // console.log("ACTION.posts");
  // console.log(action.posts);
  debugger
  switch (action.type) {
    case SET_POSTS:
      // nextState.postIds = Object.keys(action.posts);
      return {
        ...action.posts,
        ids: Object.keys(action.posts),
      };
    case ADD_POST:
      nextState.posts[action.post.id] = action.post;
      nextState.ids.push(action.post.id);
      return nextState;
    case REMOVE_POST:
      delete nextState.posts[action.postId];
      nextState.ids = nextState.ids.filter(
        (id) => Number(id) !== Number(action.postId)
      );
      return nextState;
    case SET_CURRENT_POST:
      nextState.currentPostId = Number(action.postId);
      return nextState;
    case ADD_COMMENT:
      debugger
      // nextState[action.comment.pid].Comments.push(action.comment);
      // debugger
      // return nextState;
      return {
        ...state,
      }
    default:
      return state;
  }
}
