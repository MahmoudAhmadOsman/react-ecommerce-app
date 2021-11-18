import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import orderRouter from "./routes/orderRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database Connection
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/mongodb2020", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

app.use("/api/users", userRouter); //Users api
app.use("/api/products", productRouter); //Products api
app.use("/api/orders", orderRouter); //Orders api

//PayPal API
app.use("/api/config/paypal", (req, res) => {
	res.send(process.env.PAYPAL_CLIENT_ID || "sb"); // sandbox for sb
});

app.get("/", (req, res) => {
	res.send("Server is running"); //http://localhost:5000/ express homepage
	// http://localhost:5000/api/products -> backend api
});

//Show all errors - server errors
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

//Show/handle  server error in a better way
process.on("unhandledRejection", (err, promise) => {
	console.log(`Type of Error is : ${err}`);
	server.close(() => process.exit(1));
});
