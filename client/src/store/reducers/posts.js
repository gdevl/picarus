import {
  SET_POSTS,
  ADD_POST,
  REMOVE_POST,
  SET_CURRENT_POST,
} from "../actions/posts";

const initialState = {
  posts: {},
  ids: [],
  currentPostId: -1,
};

export default function reducer(state = initialState, action) {
  let nextState = { ...state };
  switch (action.type) {
    case SET_POSTS:
      // debugger
      nextState.posts = { ...action.posts };
      nextState.ids = Object.keys(newState.posts);
      return nextState;
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
      nextState.currentPostId = action.postId;
      return nextState;
    default:
      return state;
  }
}
