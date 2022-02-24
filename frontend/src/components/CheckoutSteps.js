import React from "react";

const CheckoutSteps = (props) => {
  return (
		<section className="checkout-main-steps container">
			<div className="row checkout-steps">
				<div className={props.step1 ? "active fa fa-check-circle" : ""}>
					&nbsp; Sign In
				</div>
				<div className={props.step2 ? "active fa fa-check-circle" : ""}>
					{""} &nbsp; Shipping
				</div>
				<div className={props.step3 ? "active fa fa-check-circle" : ""}>
					&nbsp;
					{""}
					Payment
				</div>
				<div className={props.step4 ? "active fa fa-check-circle" : ""}>
					&nbsp;
					{""}
					Place Order
				</div>
			</div>
		</section>
	);
};

export default CheckoutSteps;
