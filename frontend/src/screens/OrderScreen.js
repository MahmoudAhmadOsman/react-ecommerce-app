import React, { useEffect, useState } from "react";
import Axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Link } from "react-router-dom";

import { detailsOrder } from "../actions/orderActions";

const OrderScreen = (props) => {
	const orderId = props.match.params.id;

	//PayPal hook
	const [sdkReady, setSdkReady] = useState(false);

	//Now, get order details info from orderActions dispatch actions by using useSelector hook
	const orderDetails = useSelector((state) => state.orderDetails);
	//then, exact order, loading, and error from orderActions dispatch
	const { order, loading, error } = orderDetails;

	//now, dispatch order action
	const dispatch = useDispatch();

	//dispatch order details inside use effect
	useEffect(() => {
		//PayPal script function
		const addPayPalScript = async () => {
			const { data } = await Axios.get("/api/config/paypal");
			//create script
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
			script.async = true;
			script.onload = () => {
				setSdkReady(true);
			};
			document.body.appendChild(script);
		};

		//Now, check order
		if (!order) {
			dispatch(detailsOrder(orderId));
		} else {
			//Check if the order is paid or not
			if (!order.isPaid) {
				if (!window.paypal) {
					addPayPalScript();
				} else {
					setSdkReady(true);
				}
			}
		}
	}, [dispatch, order, orderId, sdkReady]);

	//On PayPal success
	const successPaymentHnadler = () => {
		// TODO: dispatch pay order
	};

	return loading ? (
		<LoadingBox></LoadingBox>
	) : error ? (
		<MessageBox variant="danger text-center">{error}</MessageBox>
	) : (
		<section className="place_order_container mt-4">
			<div className="container">
				<h1 className="text-info">Order Summary </h1>
				<hr />
				<p className="mb-3">
					<b className="text-success">Order ID:</b> {order._id}
					&nbsp;
					<small>
						<i class="fa fa-check-circle fa-2x text-success"
							aria-hidden="true"></i>
					</small>
				</p>
<div className="row">
					{/* Left Column */}
					<div className="col-md-8 card">
						{/* `` */}
						<h4 className="text-danger"> Shipping Address </h4>
						<hr />
						<div className="table-responsive">
							<table className="table">
								<thead className="thead-dark">
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
										<td> {order.shippingAddress.fullName} </td>
										<td> {order.shippingAddress.address} </td>
										<td> {order.shippingAddress.city} </td>
										<td> {order.shippingAddress.postalCode} </td>
										<td> {order.shippingAddress.country} </td>
									</tr>
								</tbody>
							</table>
							{/* Show if order is delivered or not */}

							{order.isDelivered ? (
								<MessageBox variant="success">
									Delivered at {order.deliveredAt}
								</MessageBox>
							) : (
								<MessageBox variant="danger">
									Order is not delivered yet!
								</MessageBox>
							)}
						</div>
						<hr /> {/* Display payment method */}{" "}
						<div className="payment-method">
							<h4 className="text-danger"> Payment Method </h4>
							<p>
								<strong className="text-info"> Payment Type: </strong>{" "}
								{order.paymentMethod}{" "}
							</p>

							{/* Show message is order is paid or not */}

							{order.isPaid ? (
								<MessageBox variant="success">
									Order is paid at {order.paidAt}{" "}
								</MessageBox>
							) : (
								<MessageBox variant="danger">Order is not paid yet!</MessageBox>
							)}
						</div>
						<hr /> {/* Display Order Items*/}{" "}
						<div className="order-items">
							<h4 className="text-danger"> Purchased Items </h4>
							<hr />{" "}
							{order.orderItems.map((item) => (
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
								<b> Item(s) Price: </b> ${order.itemsPrice.toFixed(2)}{" "}
							</li>
							<li className="list-group-item">
								<b> Shipping Fees: </b> ${order.shippingPrice.toFixed(2)}{" "}
							</li>
							<li className="list-group-item">
								<b> Tax: </b>${order.taxPrice.toFixed(2)}{" "}
							</li>
							{/* Show Paypal button by conditionally */}
							{!order.isPaid && (
								<li>
									{!sdkReady ? (
										<LoadingBox></LoadingBox>
									) : (
										<PayPalButton
											amount={order.totalPrice}
											onSuccess={successPaymentHnadler}
										></PayPalButton>
									)}
								</li>
							)}

							<div className="total-prices mt-3 mb-3">
								<h3>
									Order Total: &nbsp;{" "}
									<strong className="text-danger">
										${order.totalPrice.toFixed(2)}{" "}
									</strong>
								</h3>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
export default OrderScreen;
