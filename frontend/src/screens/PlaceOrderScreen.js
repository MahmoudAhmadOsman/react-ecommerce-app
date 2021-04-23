import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }

  //Calculate prices
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );

  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const placeOrderHandler = () => {
    // TODO: dispatch place order action
  };

  return (
    <section className="place_order_container">
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>

      <div className="container">
        <h2>Place Order Summary</h2> <hr />
        <div className="row">
          {/* Left Column */}
          <div className="col-md-8 card">
            <h3 className="text-danger">Shipping Address</h3> <hr />
            <p>
              <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
              <strong>Address: </strong> {cart.shippingAddress.address} <br />
              <strong>City: </strong> {cart.shippingAddress.city} <br />
              <strong>Zip Code: </strong> {cart.shippingAddress.postalCode}{" "}
              <br />
              <strong>Country: </strong> {cart.shippingAddress.country}
            </p>
            <hr />
            {/* Display payment method */}
            <div className="payment-method">
              <h3 className="text-info">Payment Method</h3>
              <p>
                <strong>Payment Type:</strong> {cart.paymentMethod}
              </p>
            </div>
            <hr />
            {/* Display Order Items*/}
            <div className="order-items">
              <h3 className="text-danger">Purchased Items</h3> <hr />
              {cart.cartItems.map((item) => (
                <div key={item.product}>
                  <div className="">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-thumbnail"
                    ></img>
                  </div>
                  <div>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>

                  <div>
                    {item.qty} x ${item.price} = ${item.qty * item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <h2 className="text-danger">Order Summary</h2> <hr />
            <ul className="list-group">
              <li className="list-group-item">
                <b>Items Prices:</b> ${cart.itemsPrice.toFixed(2)}
              </li>

              <li className="list-group-item">
                <b>Shipping: </b> ${cart.shippingPrice.toFixed(2)}
              </li>

              <li className="list-group-item">
                <b>Taxi: </b>${cart.taxPrice.toFixed(2)}
              </li>

              <div className="total-prices mt-3 mb-3">
                <h3>
                  {" "}
                  Order Total: &nbsp;
                  <strong className="text-danger">
                    ${cart.totalPrice.toFixed(2)}
                  </strong>
                </h3>
              </div>

              <button
                type="button"
                onClick={placeOrderHandler}
                className="btn btn-danger btn-lg"
                disabled={cart.cartItems.length === 0}
              >
                Place Order
              </button>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlaceOrderScreen;
