import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Footer from "./footer/Footer";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import { signout } from "./actions/userActions";

import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

const App = () => {
  // Add cart badge - get it from redux by using useSelector which will bring the cart from redux
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  //Get the loged in user from Redux
  const userSignin = useSelector((state) => state.userSignin);
  //Then get user info from usersign
  const { userInfo } = userSignin; // then use userInfo when signing in conditionally

  //User Signout function
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header-row">
          <div>
            <Link to="/" className="brand">
              Amazon Clone
            </Link>
          </div>
          <div>
            {/* Items in the cart */}
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge bg-danger">{cartItems.length}</span>
              )}
            </Link>
            {/* <Link to="/register">Register</Link> */}
            {/* Conditional rendering for sign in */}

            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name}
                  <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={LoginScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
