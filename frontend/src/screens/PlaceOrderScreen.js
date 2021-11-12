import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";

import CheckoutSteps from "../components/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

const PlaceOrderScreen = (props) => {
	const cart = useSelector((state) => state.cart);
	if (!cart.paymentMethod) {
		props.history.push("/payment");
	}

	//After placing an order - check order state
	const orderCreate = useSelector((state) => state.orderCreate);
	const { loading, success, error, order } = orderCreate;

	//Calculate prices & Tax
	const toPrice = (num) => Number(num.toFixed(2));
	cart.itemsPrice = toPrice(
		cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
	);
	cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
	cart.taxPrice = toPrice(0.06 * cart.itemsPrice);
	cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

	//dispatch place order action
	const dispatch = useDispatch();
	const placeOrderHandler = () => {
		console.log("Order is submitted!");
		dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
	};

	//Define the loading, success, error and order variables
	useEffect(() => {
		if (success) {
			props.history.push(`/order/${order._id}`); //if success, redirect user to order details page
			dispatch({ type: ORDER_CREATE_RESET });
		}
	}, [dispatch, order, props.history, success]);

	return (
		<section className="place_order_container">
			<CheckoutSteps step1 step2 step3 step4>
				{" "}
			</CheckoutSteps>
			<div className="container">
				<h2> Place Order Summary </h2>
				<hr />
				<div className="row">
					{/* Left Column */}
					<div className="col-md-8 card">
						{/* `` */}
						<h3 className="text-danger"> Shipping Address </h3>
						<hr />
						<div className="table-responsive">
							<table className="table">
								<thead>
									<tr className="text-uppercase">
										<th> Full Name </th>
										<th> Shopping Address </th>
										<th> City </th>
										<th> Zip Code </th>
										<th> Country </th>
									</tr>
								</thead>
								<tbody>
									<tr className="text-uppercase">
										<td> {cart.shippingAddress.fullName} </td>
										<td> {cart.shippingAddress.address} </td>
										<td> {cart.shippingAddress.city} </td>
										<td> {cart.shippingAddress.postalCode} </td>
										<td> {cart.shippingAddress.country} </td>
									</tr>
								</tbody>
							</table>
						</div>
						<hr /> {/* Display payment method */}{" "}
						<div className="payment-method">
							<h3 className="text-danger"> Payment Method </h3>
							<p>
								<strong className="text-info"> Payment Type: </strong>{" "}
								{cart.paymentMethod}{" "}
							</p>
						</div>
						<hr /> {/* Display Order Items*/}{" "}
						<div className="order-items">
							<h3 className="text-danger"> Purchased Items </h3>
							<hr />{" "}
							{cart.cartItems.map((item) => (
								<div className="purchased-item-list d-flex" key={item.product}>
									<div>
										<img
											src={item.image}
											alt={item.name}
											className="img-thumbnail"
										></img>{" "}
									</div>
									<div>
										<Link to={`/product/${item.product}`}> {item.name} </Link>
									</div>
									<div>
										{" "}
										{item.qty}x $ {item.price} = $ {item.qty * item.price}{" "}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-md-4 order-total-summary">
						<h2 className="text-danger"> Order Summary </h2>
						<hr />
						<ul className="list-group">
							<li className="list-group-item">
								<b> Item(s) Price: </b> ${cart.itemsPrice.toFixed(2)}{" "}
							</li>
							<li className="list-group-item">
								<b> Shipping: </b> ${cart.shippingPrice.toFixed(2)}{" "}
							</li>
							<li className="list-group-item">
								<b> Tax: </b>${cart.taxPrice.toFixed(2)}{" "}
							</li>
							<div className="total-prices mt-3 mb-3">
								<h3>
									Order Total: &nbsp;{" "}
									<strong className="text-danger">
										${cart.totalPrice.toFixed(2)}{" "}
									</strong>
								</h3>
							</div>
							<button
								type="button"
								onClick={placeOrderHandler}
								className="btn btn-danger btn-lg"
								disabled={cart.cartItems.length === 0}
							>
								Place Order{" "}
							</button>
						</ul>
						{loading && <LoadingBox></LoadingBox>}
						{error && <MessageBox variant="danger">{error}</MessageBox>}
					</div>
				</div>
			</div>
		</section>
	);
};
export default PlaceOrderScreen;
