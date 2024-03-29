import Axios from "axios";
import {
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

//1. Define actions here and export
export const listProducts = () => async (dispatch) => {
	//Now, dispatch the list
	dispatch({
		type: PRODUCT_LIST_REQUEST, // Get [list] of all products
	});

	//Use try and catch and also async and await
	try {
		//Now, send AJAX request to the backend using axios (/api/products) endpoint
		const { data } = await Axios.get("/api/products");
		//Now, dispatch the action to update the component to show the products
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data, // contains the data stream that is coming from the backend
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload: error.message,
		});
	}
};

//2. Now create product reducer function to respond to these action {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST & PRODUCT_LIST_SUCCESS} -=> inside the src folder by creating a [reducers] folder



//2. Get product by its id from backend and update reudux based on the product it
//=== PRODUCT DETAILS dispatch
export const detailsProduct = (productId) => async (dispatch) => {
	dispatch({
		type: PRODUCT_DETAILS_REQUEST,
		payload: productId,
	});
	try {
		//Get the product from the backend
		const { data } = await Axios.get(`/api/products/${productId}`);
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			//Check if errors exist
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
//3. got to productReducer inside [reducers] foldeer and add productDetailsReducer () function
