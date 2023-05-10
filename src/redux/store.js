import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import favoritesReducer from "./reducers";

const store = createStore(
  favoritesReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;