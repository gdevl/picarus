import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "./middleware/thunk";

const configureStore = (preloadedState = {}) => {
  debugger;
  return createStore(rootReducer, preloadedState), applyMiddelware(thunk);
};

export default configureStore;
