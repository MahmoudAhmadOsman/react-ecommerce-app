import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export default function ProductScreen(props) {
  //Find product by its id
  const product = data.products.find((x) => x._id === props.match.params.id);
  //If product doesn't exist
  if (!product) {
    return <div className="product_not_found"> Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        &nbsp; Go Back
      </Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>
              <b>Price</b> : ${product.price}
            </li>
            <li>
              <b> Description:</b>

              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">
                    <b className="text-primary">${product.price}</b>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  {/* Check product availability */}
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
