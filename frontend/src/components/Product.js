import React from "react";
import { Link } from "react-router-dom";
import currencyFormat from "../utils/util";
import Rating from "./Rating";
const Product = (props) => {
  const productListTitle = "All Products";


  
  const { products } = props;
  return (
    <section className="product-main-container mt-4">
      <div className="container">
        <h1 className="text-danger">{productListTitle}</h1> <hr />
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-3" key={product._id}>
              <div className="card">
                <Link to={`/product/${product._id}`}>
                  <img
                    className="img-fluid"
                    src={product.image}
                    alt={product.name}
                    draggable="false"
                  />
                </Link>

                <div className="card-body">
                  <h4 className="card-title">{product.name}</h4>
                  <p className="brand-name">
                    Brand: <span className="text-muted">{product.brand}</span>
                  </p>
                  <hr />
                  <p className="card-text">
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    ></Rating>
                  </p>
                  <button className="btn btn-outline-dark disabled">
                    {currencyFormat(product.price)}
                  </button>

                  <Link
                    className="btn btn-outline-danger ml-1"
                    to={`/product/${product._id}`}
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
