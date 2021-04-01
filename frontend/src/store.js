///import data from "./data";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";

//Steps: 1: InitialState, 2: reducer 3: store
const InitialState = {
  //Read the cart item in localStorage and check
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

//2: Reducer(param1, param2), ex. reducer(state, action)
// const reducer = (state, action) => {
//   return { products: data.products };
// };
//3. Now update the reducer with the productReducers function
//combineReducers() accepts an object
/*======= All Combined Reducers ===============*/
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer, // for cart Reducer
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
