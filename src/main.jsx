import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import cartsaver from "./redux/cartsaver.js";
import Apps from "./Apps.jsx";  
import Products from "./Products.jsx";
import CartPage from "./CartPage.jsx";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./ProductContext.jsx";


const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={cartsaver}>
      {/* <Apps /> */}
      <ProductProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      </BrowserRouter>
      </ProductProvider>
    </Provider>
  </StrictMode>
);
