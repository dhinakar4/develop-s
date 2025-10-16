import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const cartsaver = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default cartsaver;
