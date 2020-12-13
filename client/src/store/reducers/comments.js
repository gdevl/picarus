import { ADD_COMMENT } from "../actions/comments";

const initialState = {};

export default function reducer(state = initialState, action) {
  let nextState = { ...state };
  // console.log("ACTION.posts");
  // console.log(action.posts);
  switch (action.type) {
    case ADD_COMMENT:
      //   nextState.posts[action.post.id] = action.post;
      //   nextState.ids.push(action.post.id);
      return nextState;
    default:
      return state;
  }
}
