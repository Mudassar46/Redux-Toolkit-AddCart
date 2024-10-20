import { configureStore } from "@reduxjs/toolkit";
import counter from "../counterSlice";
import cartSlice from "../cartSlice";
const store = configureStore({
  reducer: {
    counter: counter,
    cart: cartSlice,
  },
});

export default store;
