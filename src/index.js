import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CartProvider from "./store/CartProvider";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
