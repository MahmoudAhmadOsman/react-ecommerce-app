import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";

//import data from "../data";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  //Find product by its id
  // const product = data.products.find((x) => x._id === props.match.params.id); //old, static
  //Get the product list from Redux store instead of getting details from static file

  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  //If product doesn't exist
  // if (!product) {
  //   return <div className="product_not_found"> Product Not Found</div>;
  // }

  //last use useEffect()

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            &nbsp; Go Back
          </Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
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
                          <span className="error">Out Of Stock</span>
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
      )}
    </div>
  );
}
