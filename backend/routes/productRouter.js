import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({}); // Get all products from database
    res.send(products); // Send the products to frontend
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({}); // remove product in the database in order to create new products
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

//Get a product by its id
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      // if product exists
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found!" });
    }
  })
);

export default productRouter;
