///import data from "./data";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

//Steps: 1: InitialState, 2: reducer 3: store
const InitialState = {};

//2: Reducer(param1, param2), ex. reducer(state, action)
// const reducer = (state, action) => {
//   return { products: data.products };
// };
//3. Now update the reducer with the productReducers function
//combineReducers() accepts an object
const reducer = combineReducers({
  productList: productListReducer,
}); //4.=> now go the homeScreen.js and get rid off React Hooks and instead use productList from redux store

//Now, add thunk for Google Chrome in order to see action & state changes
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//3: createStore function, takes 2 params createStore(reducer, InitialState) and  thunk middleware
const store = createStore(
  reducer,
  InitialState,
  //compose(applyMiddleware(thunk))
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
