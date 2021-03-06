import axios from "axios";

import {
  CART_ADD_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

//dispatch, getState: are function in redux
export const addToCart = (productId, qty) => async (dispatch, getState) => {
  //1st send a get request to get the product with the id from backed
  const { data } = await axios.get(`/api/products/${productId}`);
  //2. dispatch an action
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });

  //3rd sace the product to the localStorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
//4th. create a reducer

//REMOVE FROM CART ITEMS
export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productId,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//Shipping Address Action

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  //Save shippingAddress  data into localStorage and convert data into json object
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

//Save  Payment Method Action

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });
};
