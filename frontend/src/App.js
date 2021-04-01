import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Footer from "./footer/Footer";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";

function App() {
  // Add cart badge - get it from redux by using useSelector which will bring the cart from redux
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header-row">
          <div>
            <Link to="/" className="brand">
              MAO Store
            </Link>
          </div>
          <div>
            {/* Items in the cart */}
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span class="badge bg-danger">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/register">Register</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
