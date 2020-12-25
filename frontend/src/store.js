import data from "./data";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

//Steps: 1: InitialState, 2: reducer
const InitialState = {};

//2: Reducer(param1, param2), ex. reducer(state, action)
const reducer = (state, action) => {
  return { products: data.products };
};

//Now add thunk for Google Chrome in order to see action & state changes
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//3: create store, takes 2 params createStore(reducer, InitialState)
const store = createStore(
  reducer,
  InitialState,
  //compose(applyMiddleware(thunk))
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
