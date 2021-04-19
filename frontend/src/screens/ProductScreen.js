import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import currencyFormat from "../utils/util";

//import data from "../data";

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  //Find product by its id
  // const product = data.products.find((x) => x._id === props.match.params.id); //old, static
  //Get the product list from Redux store instead of getting details from static file

  const productId = props.match.params.id;
  //Set Quality
  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  //If product doesn't exist
  // if (!product) {
  //   return <div className="product_not_found"> Product Not Found</div>;
  // }

  //lastly use useEffect()

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  //Add to Cart button action
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <section className="product-details-page">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger" className="text-center">
          {error}
        </MessageBox>
      ) : (
        <div className="product-container">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Link to="/">
                  <i
                    className="fa fa-chevron-left mt-3"
                    aria-hidden="true"
                    title="Go back"
                  ></i>
                </Link>{" "}
                <hr />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-fluid img-thumbnail"
                  src={product.image}
                  alt={product.name}
                  draggable="false"
                />
                <h1>{product.name}</h1>
                <p className="brand-name">
                  Brand: <span className="text-muted">{product.brand}</span>
                </p>
                <hr />
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
                <p className="product-title">
                  <b> Product Details:</b>
                </p>
                <p>
                  <p className="product-description">{product.description}</p>
                </p>
              </div>
              <div className="col-md-3">
                <h1>
                  <b className="text-danger">{currencyFormat(product.price)}</b>
                </h1>
                <p>
                  <b className="text-info">Status: </b>
                  {product.countInStock > 0 ? (
                    <small className="text-muted">In Stock</small>
                  ) : (
                    <small className="text-danger">Out Of Stock</small>
                  )}
                </p>
              </div>
              {/* <div className="col-md-2">
                <h1 className="text-info">Status</h1>
                {product.countInStock > 0 ? (
                  <small className="text-success">In Stock</small>
                ) : (
                  <small className="text-danger">Out Of Stock</small>
                )}
              </div> */}

              <div className="col-md-3">
                <ul className="list-group">
                  {product.countInStock > 0 && (
                    <div
                      style={{
                        border: "1px solid #ccc",
                        height: "290px",
                        backgroundColor: "#fafafa",
                        padding: "20px",
                      }}
                    >
                      <div>
                        <h1 className="text-info">Qty</h1>
                        <div>
                          <select
                            className="form-control mb-5"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={addToCartHandler}
                        className="btn btn-outline-danger btn-block btn-lg mt-4"
                      >
                        <h3 className="font-weight-bold"> Add to Cart</h3>
                      </button>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default ProductScreen;
