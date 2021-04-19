import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingAddressScreen = () => {
  return (
    <div className="container">
          <CheckoutSteps step1 step2></CheckoutSteps>
          <h2 className="text-info">Shipping</h2> <hr/>
    </div>
  );
};

export default ShippingAddressScreen;
