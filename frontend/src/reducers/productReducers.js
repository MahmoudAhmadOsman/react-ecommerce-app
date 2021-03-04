//Define product List Reducer() function. reducer(state, action) accepts 2 params[state &action]

import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

//productListReducer(pram1, pram2)
export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  //Inside switch, check actions
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true }; // Return new state
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state; // return the current or previous state if there is no change
  }
};

//3. Now add this function to Redux store inside store.js inside the combineReducers() function

export const productDetailsReducer = (
  state = { product: {}, loading: true },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
//3. Now add this function to Redux store inside store.js inside the combineReducers() function
//Also update product screen
