import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function CartScreen(props) {
  //Read the cart id here
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    //Check if the product is already in the cart or not
    if (productId) {
      dispatch(addToCart(productId, qty)); // define dispatch first
    }
  }, [dispatch, productId, qty]);

  //Cart item
  //const cartItems = this.props;

  return (
    <section className="cart-items">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-danger">Cart Items</h1>
            <small className="text-muted">
              Your cart items. You have <b className="text-danger">{qty}</b>{" "}
              items in your cart.
            </small>
            <hr />
            <p>
              ADD TO CART : Product ID: {productId} Qty: {qty}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
