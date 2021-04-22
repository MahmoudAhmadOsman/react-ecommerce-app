import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentMethodScreen = (props) => {
  //Check if user filled in shipping address or not
  //1. get cart from redux store using useSelector

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  //Check now shipping address
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  //1.initialize dispatch
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    //2. dispatch action
    dispatch(savePaymentMethod(paymentMethod));

    //Then, redirec the user to placeholder component
    props.history.push("/placeorder");
  };

  return (
    <section className="payment_method__page">
      {/* Stepts component */}
      <CheckoutSteps step1 step2 step3></CheckoutSteps> <hr />
      <div className="container mt-3">
        <h2>Payment Methods </h2> <hr />
        <div className="row">
          <div className="col-md-10">
            <form action="" onSubmit={submitHandler}>
              {/* PayPal */}
              <div className="form-group">
                <input
                  type="radio"
                  id="paypal"
                  value="PayPal"
                  name="paymentMethod"
                  required
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="paypal">&nbsp; PayPal</label>
              </div>

              {/* Stripe */}

              <div className="form-group">
                <input
                  type="radio"
                  id="stripe"
                  value="Stripe"
                  name="paymentMethod"
                  required
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="stripe">&nbsp; Stripe</label>
              </div>

              {/* Submit btn */}
              <div className="form-group">
                <button type="submit" className="btn btn-outline-danger btn-lg">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodScreen;
