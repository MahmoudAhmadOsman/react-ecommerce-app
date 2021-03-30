import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <section className="product-main-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <a href={`/product/${product._id}`}>
                <img
                  className="img-fluid"
                  src={product.image}
                  alt={product.name}
                />
              </a>

              <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <hr />
                <p className="card-text">
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </p>
                <button className="btn btn-outline-dark disabled">
                  ${product.price}
                </button>

                <Link
                  className="btn btn-outline-info ml-1"
                  to={`/product/${product._id}`}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
