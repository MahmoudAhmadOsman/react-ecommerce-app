///import data from "./data";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { orderCreateReducer } from "./reducers/orderReducers";

import {
	productDetailsReducer,
	productListReducer,
} from "./reducers/productReducers";
import {
	userRegisterReducer,
	userSigninReducer,
} from "./reducers/userReducers";

//Steps: 1: InitialState, 2: reducer 3: store
const InitialState = {
	//Save Signin user info into the localStorage & keep the user logged even after page refresh
	userSignin: {
		userInfo: localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null,
	},

	//Save  cart item into localStorage & keep the user logged even after page refresh
	cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],

		//Save the Shipping address into localStorage
		shippingAddress: localStorage.getItem("shippingAddress")
			? JSON.parse(localStorage.getItem("shippingAddress"))
			: {},

		//For payment method - default
		paymentMethod: "PayPal",
	},
};

//2: Reducer(param1, param2), ex. reducer(state, action)
// const reducer = (state, action) => {
//   return { products: data.products };
// };
//3. Now update the reducer with the productReducers functions
//combineReducers() accepts an object
/*======= All Combined Reducers ===============*/
const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer, // for cart Reducer
	userSignin: userSigninReducer, // then use this LoginScreen.js inside the submitHandler() function
	//keys here are: [productList, productDetails, cart, userSignin] - use these keys you will have access to the redux store
	userRegister: userRegisterReducer,
	orderCreate: orderCreateReducer,
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
