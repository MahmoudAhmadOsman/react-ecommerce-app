import express from "express";
import mongoose from "mongoose";

import ProductRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

//Database Connection
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/mongodb2020", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//Users router
app.use("/api/users", userRouter);
//Product router - dynamic data from backend
app.use("/api/products", ProductRouter);

//Products api from the backend or from data.js file
app.get("api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send(`<h2>Great!. Server is running:  ${port}</h2>`);
});

//Show all errors - server errors
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server stated at http://localhost:${port}`);
});
