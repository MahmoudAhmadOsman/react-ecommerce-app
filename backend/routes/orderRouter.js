import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

//Order history route
orderRouter.get(
	"/mine",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const orders = await Order.find({ user: req.user._id });
		res.send(orders);
	})
);

//Order Route - Post RESTFULL API
orderRouter.post(
	"/",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		if (req.body.orderItems.length === 0) {
			res.status(400).send({ message: "Your cart is empty!" });
		} else {
			const order = new Order({
				orderItems: req.body.orderItems,
				shippingAddress: req.body.shippingAddress,
				paymentMethod: req.body.paymentMethod,
				itemsPrice: req.body.itemsPrice,
				shippingPrice: req.body.shippingPrice,
				taxPrice: req.body.taxPrice,
				totalPrice: req.body.totalPrice,
				user: req.user._id,
			});

			const createdOrder = await order.save(); ///Save Order to the database
			res
				.status(201)
				.send({ message: "New order has been created", order: createdOrder });
		}
	})
);

//Get an order by its id - route
orderRouter.get(
	"/:id",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		//1. Get order from the database
		const order = await Order.findById(req.params.id);
		//Check if order exists or not
		if (order) {
			res.send(order);
		} else {
			res.status(404).send({ message: "Order Not Found in the database!" });
		}
	})
);

//2. use this route in the App/frontend
export default orderRouter;
