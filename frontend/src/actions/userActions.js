import Axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";

//User register
export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data }); //Update redux when user signs in
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//User signin
export const signin = (email, password) => async (dispatch) => {
  // now dispatch an action
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password },
  });
  try {
    //send request to signin
    const { data } = await Axios.post("/api/users/signin", { email, password });
    //Now, dispatch user signin success
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    //then save the data into  localStorage
    //localStorage.setItem("isthekey", JSON.stringify(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//User signout from

export const signout = () => (dispatch) => {
  //first remove user from localStorage
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems"); // Also remove cart items
  localStorage.removeItem("shippingAddress"); //Remove address when user singout

  //Then dispatch user singout actions
  dispatch({
    type: USER_SIGNOUT,
  });
  //Then use this action in App.js sign out
};

//2. next create userReducer
