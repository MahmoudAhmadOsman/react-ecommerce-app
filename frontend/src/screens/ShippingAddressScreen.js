import React from "react";
import "./shippingAddressScreen.css";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingAddressScreen = () => {
  return (
    <div className="shipping-container">
      <CheckoutSteps step1 step2></CheckoutSteps>
      <hr />
      <div className="container mt-4">
        <h1>Shipping</h1> <hr />
        <div className="row">
          <div className="col-md-10">
            <form action="#" method="POST">
              {/* Full name */}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your full name"
                  id="name"
                  require
                />
              </div>
              {/* Shipping ddress */}
              <div className="form-group">
                <label htmlFor="address">Street Address & APT/SUITE #</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your  address"
                  id="address"
                  require
                />
              </div>
              {/* City */}
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your city"
                  id="city"
                  require
                />
              </div>

              {/* State  */}

              <div className="form-group">
                <label htmlFor="state">State</label>
                <select name="" id="" className="form-control form-control-lg">
                  <option value="" disabled>
                    Select state
                  </option>
                  <option value="">MN</option>
                  <option value="">NY</option>
                  <option value="">VT</option>
                  <option value="">MA</option>
                  <option value="">TX</option>
                </select>
              </div>
              {/* Zip Code */}
              <div className="form-group">
                <label htmlFor="zipcode">Zip Code</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your zip code"
                  id="zipcode"
                  maxlength="5"
                  require
                />
              </div>
              <div className="form-group">
                <button className="btn btn-outline-danger  btn-lg">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressScreen;
