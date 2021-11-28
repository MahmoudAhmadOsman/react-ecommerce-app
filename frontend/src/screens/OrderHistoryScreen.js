import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderMine } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

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
					<LoadingBox></LoadingBox>
				) : error ? (
					<MessageBox variant="danger">{error}</MessageBox>
				) : (
					<div className="row">
						<div className="col-md-12">
							<div class="table-responsive">
								<table class="table table-hover table-striped">
									<thead class="thead-dark">
										<tr>
											<th>ORDER ID</th>
											<th>DATE</th>
											<th>TOTAL</th>
											<th>PAID</th>
											<th>DELIVERED</th>
											<th>ACTIONS</th>
										</tr>
									</thead>
									<tbody>
										{orders.map((order) => (
											<tr key={order.id}>
												<td>{order._id}</td>
												<td>{order.createdAt.substring(0, 10)}</td>
												<td>{order.totalPrice.toFixed(2)}</td>
												<td>
													{order.isPaid ? order.paidAt.substring(0, 10) : "NO"}
												</td>
												<td>
													{order.isDelivered
														? order.deliveredAt.substring(0, 10)
														: "NO"}
												</td>
												<td>
													<button
														type="button"
														className="btn btn-danger btn-sm"
														onClick={() => {
															props.history.push(`/order/${order._id}`);
														}}
													>
														Details
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default OrderHistoryScreen;
