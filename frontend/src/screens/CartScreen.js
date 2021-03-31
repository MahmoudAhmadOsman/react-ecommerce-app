import React from "react";

export default function CartScreen(props) {
  //Read the cart id here
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  return (
    <section className="cart-items">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-danger">Cart Screen: Coming Soon!</h1> <hr />
            <p>
              ADD TO CART : ProductID: {productId} Qty: {qty}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
