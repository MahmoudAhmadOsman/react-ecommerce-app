import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

const Navigation = () => {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const dispatch = useDispatch();
	const signoutHandler = () => {
		dispatch(signout());
	};
	return (
		<section className="main-navigation ">
			<nav className="navbar navbar-expand-md navbar-dark  bg-dark">
				<Link className="navbar-brand" to="/">
					Amazon Clone
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExampleDefault"
					aria-controls="navbarsExampleDefault"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
					</ul>

					<div className="d-flex">
						<Link
							to="/cart"
							className="btn btn-outline-success mr-2 "
							disabled={cartItems.length < 1}
						>
							<i className="fa fa-cart-plus" aria-hidden="true"></i>
							{cartItems.length > 0 && (
								<span class="badge badge-pill badge-danger shopping-cart">
									{cartItems.length}
								</span>
							)}
						</Link>
					</div>
					<div className="d-flex">
						{userInfo ? (
							<>
								<li className="nav-item dropdown">
									<Link
										className="nav-link dropdown-toggle"
										to="#"
										id="dropdown01"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										{userInfo.name}
									</Link>
									<div className="dropdown-menu" aria-labelledby="dropdown01">
										<Link className="dropdown-item" to="/orderhistory">
											Order History
										</Link>
										<Link className="dropdown-item" to="/profile">
											User Profile
										</Link>
										<Link
											className="dropdown-item"
											to="/signin"
											onClick={signoutHandler}
										>
											Sign Out
										</Link>
									</div>
								</li>
							</>
						) : (
							<Link
								to="/signin"
								className="btn btn-outline-primary"
								title="login"
							>
								<i
									className="fa fa-pencil"
									aria-hidden="true"
									title="Sign in"
								></i>
							</Link>
						)}
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Navigation;
