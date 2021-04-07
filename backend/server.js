import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./routes/userRouter.js";

const app = express();

//Database Connection
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/mongodb2020", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//Products api from the backend or from data.js file
app.get("api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

//Get product by its id
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
    //console.log(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

//Users router
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send(`<h2>Great!. Backend Server is ready at port:  ${port}</h2>`);
});

//Show all errors - server errors
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server stated at http://localhost:${port}`);
});
