import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartItemReducer from "./slices/cartItemSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartItemReducer
  },
});
