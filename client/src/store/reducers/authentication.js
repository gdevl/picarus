import { SET_TOKEN, REMOVE_TOKEN, ADD_USER } from "../actions/authentication";

const initialState = {
  token: "",
  user: {
    id: "",
    displayName: "",
    email: "",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      // debugger
      return {
        ...state,
        token: action.token,
        user: {
          id: action.id,
          displayName: action.displayName,
          email: action.email,
        },
      };
    case REMOVE_TOKEN:
      const newState = { ...state };
      delete newState.token;
      return newState;
    case ADD_USER:
      return { ...state, ...action.user };
    default:
      return state;
  }
}
