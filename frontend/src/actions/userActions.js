import Axios from "axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";

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

  //Then dispatch user singout actions
  dispatch({
    type: USER_SIGNOUT,
  });
  //Then use this action in App.js sign out
};

//2. next create userReducer
