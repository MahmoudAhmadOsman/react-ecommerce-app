import Axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

//1. Define actions here and export
export const listProducts = () => async (dispatch) => {
  //Now, dispatch the list
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });

  try {
    //Now send AJAX request to the backend using axios
    const { data } = await Axios.get("/api/products");
    //Now, dispatch the action to update the component to show the products
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data, // contains the data from the backend
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};

//2. Now create product reducer function to respond to these action {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS}
//inside the src folder by creating a reducers folder
