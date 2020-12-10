import {
  SET_POSTS,
  ADD_POST,
  REMOVE_POST,
  SET_CURRENT_POST,
} from "../actions/posts";

const initialState = {
  postIds: {},
  ids: [],
  currentPostId: null,
};

export default function reducer(state = initialState, action) {
  let nextState = { ...state };
  switch (action.type) {
    case SET_POSTS:
      nextState.postIds = { ...action.posts };
      nextState.ids = Object.keys(nextState.postIds);
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
