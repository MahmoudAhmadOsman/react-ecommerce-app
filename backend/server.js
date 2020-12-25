import express from "express";
import data from "./data.js";

const app = express();

//Products api
app.get("api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server stated at http://localhost:${port}`);
});
