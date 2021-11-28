import Axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";
import {
	ORDER_CREATE_FAIL,
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_SUCCESS,
	ORDER_DETAILS_FAIL,
	ORDER_DETAILS_REQUEST,
	ORDER_DETAILS_SUCCESS,
	ORDER_MINE_LIST_FAIL,
	ORDER_MINE_LIST_REQUEST,
	ORDER_MINE_LIST_SUCCESS,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
	dispatch({
		type: ORDER_CREATE_REQUEST,
		payload: order,
	});
	try {
		const {
			userSignin: { userInfo }, // Get the signed in user info
		} = getState();
		const { data } = await Axios.post("/api/orders", order, {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		});
		dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
		dispatch({ type: CART_EMPTY }); //Clear the cart
		localStorage.removeItem("cartItems"); //clear localStorage
	} catch (error) {
		dispatch({
			type: ORDER_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Order details action - dispatch order details actions after creating order details constants
export const detailsOrder = (orderId) => async (dispatch, getState) => {
	dispatch({
		type: ORDER_DETAILS_REQUEST,
		payload: orderId,
	});
	const {
		userSignin: { userInfo },
	} = getState();
	try {
		const { data } = await Axios.get(`/api/orders/${orderId}`, {
			headers: { Authorization: `Bearer ${userInfo.token}` },
		});
		dispatch({
			type: ORDER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({
			type: ORDER_DETAILS_FAIL,
			payload: message,
		});
	}
};

//Order History Action
export const listOrderMine = () => async (dispatch, getState) => {
	dispatch({ type: ORDER_MINE_LIST_REQUEST }); // no pay here
	const {
		userSignin: { userInfo },
	} = getState();
	try {
		const { data } = await Axios.get("/api/orders/mine", {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		});
		dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
	}
};
//Plan

// In order to get list of order history, define
// 1. OrderHistory Constant
// 2. Order Action
// 2. Reducer
// 3. then add this to store.js
// 4. get loading, error and orders from Redux store
// and use them in the OrderHistory.js screen
