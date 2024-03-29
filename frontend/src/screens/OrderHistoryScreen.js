import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderMine } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import currencyFormat from "../utils/util";

const OrderHistoryScreen = (props) => {
	//Get the orders list from Redux store using useSelector
	const orderMineList = useSelector((state) => state.orderMineList);
	const { loading, error, orders } = orderMineList;

	//Call thelist now using dispatch function

	const dispatch = useDispatch();
	useEffect(() => {
		//Dispatch the orderMineList action here
		dispatch(listOrderMine());
	}, [dispatch]);

 

	return (
		<section className="order-history">
			<div className="container">
				<h1 className="text-danger">Order History</h1> <hr />
				{loading ? (
					// <LoadingBox></LoadingBox>
					<LoadingBox type={"spin"} color={"orange"} />
				) : error ? (
					<MessageBox variant="danger">{error}</MessageBox>
				) : (
					<div className="row">
						<div className="col-md-12">
							{orders.length <= 0 ? (
								<div className="alert alert-danger">
									<h3>
										<i className="fa fa-warning"></i>&nbsp; You don't have any
										order yet!
									</h3>
								</div>
							) : (
								<div class="table-responsive">
									<table class="table table-hover table-striped">
										<thead class="thead-dark">
											<tr>
												<th>ORDER ID</th>
												<th>ORDER DATE</th>
												<th>TOTAL PRICE</th>
												<th>PAID</th>
												<th>DELIVERED</th>
												<th>ACTIONS</th>
											</tr>
										</thead>
										<tbody>
											{orders.map((order) => (
												<tr key={order._id}>
													<td>{order._id}</td>

													<td>{order.createdAt.substring(0, 10)}</td>
													<td>${order.totalPrice.toFixed(2)}</td>
													<td>
														{order.isPaid ? (
															order.paidAt.substring(0, 10)
														) : (
															<span className="text-danger font-weight-bold">
																NO
															</span>
														)}
													</td>
													<td>
														{order.isDelivered ? (
															order.deliveredAt.substring(0, 10)
														) : (
															<span className="text-danger font-weight-bold">
																NO
															</span>
														)}
													</td>
													<td>
														<button
															type="button"
															className="btn btn-success btn-sm"
															onClick={() => {
																props.history.push(`/order/${order._id}`);
															}}
														>
															<i className="fa fa-eye" title="View details"></i>
														</button>
														<button className="btn btn-danger btn-sm ml-2">
															<i className="fa fa-trash" title="Detlete"></i>
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default OrderHistoryScreen;
