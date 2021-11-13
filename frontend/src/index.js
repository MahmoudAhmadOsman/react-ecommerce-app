import React from "react";
// Wrap the Provider function around the App component so that you all components can have an access to the store in Redux
import { Provider } from "react-redux";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
