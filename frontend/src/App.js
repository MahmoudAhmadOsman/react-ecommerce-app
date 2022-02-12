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
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./components/NotFound";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Navigation from "./components/Navigation";

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
			<section className="grid-container">
				<Navigation />

				<main>
					{/* <Route path="/" component={HomeScreen} exact={true}></Route> */}
					<Route path="/cart/:id?" component={CartScreen}></Route>
					<Route path="/product/:id" component={ProductScreen}></Route>
					<Route path="/signin" component={LoginScreen}></Route>
					<Route path="/register" component={RegisterScreen}></Route>
					<Route path="/shipping" component={ShippingAddressScreen}></Route>
					<Route path="/payment" component={PaymentMethodScreen}></Route>
					<Route path="/placeorder" component={PlaceOrderScreen}></Route>
					<Route path="/order/:id" component={OrderScreen}></Route>
					<Route path="/orderhistory" component={OrderHistoryScreen}></Route>
					<Route path="/profile" component={ProfileScreen}></Route>
					<Route path="/" component={HomeScreen} exact={true}></Route>
					{/* <Route path="*" exact={true} component={NotFound}></Route> */}
				</main>
				<Footer />
			</section>
		</BrowserRouter>
	);
};

export default App;
