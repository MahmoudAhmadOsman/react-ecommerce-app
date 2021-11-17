import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";

import MessageBox from "../components/MessageBox";
import currencyFormat from "../utils/util";

const CartScreen = (props) => {
	//Read the cart id here
	const productId = props.match.params.id;

	const qty = props.location.search
		? Number(props.location.search.split("=")[1])
		: 1;
	//Cart page items
	const cart = useSelector((state) => state.cart);
	//Now fetch cart items
	const { cartItems } = cart;
	// Now you can use the cart items from redux store

	//Cart menu items
	const dispatch = useDispatch();
	useEffect(() => {
		//Check if the product is already in the cart or not
		if (productId) {
			dispatch(addToCart(productId, qty)); // define dispatch first
		}
	}, [dispatch, productId, qty]);

	//Cart item
	//const cartItems = this.props;

	//Remote Cart Items
	const removeFromCartHandler = (id) => {
		// delete items from cart
		dispatch(removeFromCart(id));
	};

	//Checkout function
	const checkoutHandler = () => {
		props.history.push("/signin?redirect=shipping");
	};

	return (
		<section className="cart-items">
			<div className="container">
				<div className="row">
					<div class="col-md-12">
						<Link to={`/product/${productId}`}>
							<i
								class="fa fa-chevron-left mt-3"
								aria-hidden="true"
								title="Go back"
							></i>
						</Link>
					</div>
				</div>
			</div>

			<div className="container mt-3">
				<div className="shopping-bag">
					{/* <i className="fa fa-shopping-cart"></i> */}
					<h1 className="text-danger">Shopping Cart</h1>

					<hr />
				</div>
				{cartItems.length === 0 ? (
					<MessageBox>
						Your Cart is empty.
						<Link to="/"> Continue Shopping...</Link>
					</MessageBox>
				) : (
					<div>
						{cartItems.map((item) => (
							<div className="row">
								<div className="col" key={item.product}>
									<img
										src={item.image}
										alt={item.name}
										className="img-fluid mb-2"
									/>
								</div>
								<div className="col">
									<Link to={`/product/${item.product}`}>
										<h1>{item.name}</h1>
									</Link>
									<small className="text-muted">
										{currencyFormat(item.price)}
									</small>
								</div>
								<div className="col">
									<select
										className="form-control"
										value={item.qty}
										onChange={(e) =>
											dispatch(addToCart(item.product, Number(e.target.value)))
										}
									>
										{[...Array(item.countInStock).keys()].map((x) => (
											<option key={x + 1} value={x + 1}>
												{x + 1}
											</option>
										))}
									</select>
								</div>
								<div className="col">
									<button
										type="button"
										className="btn btn-outline-danger"
										onClick={() => removeFromCartHandler(item.product)}
									>
										Delete
									</button>
								</div>
							</div>
						))}
						<hr />
						<div className="float-right">
							<h3 className="text-primary">
								Cart Items: ({cartItems.reduce((a, c) => a + c.qty, 0)} items){" "}
								<br />
								<small className="text-muted">
									${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
								</small>
							</h3>
							<hr />
							<button
								onClick={checkoutHandler}
								type="button"
								className="btn btn-outline-danger btn-block btn-lg"
								disabled={cartItems.length === 0}
							>
								Proceed to Checkout
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default CartScreen;
