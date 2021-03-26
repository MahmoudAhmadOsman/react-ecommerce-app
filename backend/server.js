import express from "express";
import data from "./data.js";

const app = express();

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

app.get("/", (req, res) => {
  res.send(`<h2>Greate. Backend Server is ready at port:  ${port}</h2>`);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server stated at http://localhost:${port}`);
});
