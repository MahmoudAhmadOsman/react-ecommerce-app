import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingAddressScreen = (props) => {
  //first get the signed in user info
  const userSignin = useSelector((state) => state.userSignin);

  //Then get user info
  const { userInfo } = userSignin;
  //Get CART items
  const cart = useSelector((state) => state.cart);
  
  const { shippingAddress } = cart;

  //If user is not signed in, then redirect to sign in
  if (!userInfo) {
    props.history.push("/signin");
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  //Submit Handler form function
  const submitHandler = (e) => {
    e.preventDefault();

    //After getting logged user info and cart items, dispatch the action
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );

    //Redirect the user to payment component
    props.history.push("/payment");
  };
  return (
    <div className="shipping-container">
      <CheckoutSteps step1 step2></CheckoutSteps>
      <hr />
      <div className="container mt-4">
        <h2>Shipping Address</h2> <hr />
        <div className="row">
          <div className="col-md-10">
            <form action="#" method="POST" onSubmit={submitHandler}>
              {/* Full name */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg text-uppercase"
                  placeholder="Enter your full name"
                  id="fullName"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  required
                />
              </div>
              {/* Shipping ddress */}
              <div className="form-group">
                <label htmlFor="address">Street Address & Apt/Suite #</label>
                <input
                  type="text"
                  className="form-control form-control-lg text-uppercase"
                  placeholder="Enter your  address"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                />
              </div>
              {/* City */}
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control form-control-lg text-uppercase"
                  placeholder="Enter your city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>

              {/* Zip Code */}
              <div className="form-group">
                <label htmlFor="postalcode">Zip Code</label>
                <input
                  type="text"
                  className="form-control form-control-lg "
                  placeholder="Enter your zip code"
                  id="postalcode"
                  maxlength="5"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
              </div>
              {/* Country */}

              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  className="form-control form-control-lg text-uppercase"
                  placeholder="Enter your country "
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <button
                  role="button"
                  type="submit"
                  className="btn btn-outline-danger btn-lg"
                >
                  Next
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
