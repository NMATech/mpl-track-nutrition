import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/caloriLogSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;