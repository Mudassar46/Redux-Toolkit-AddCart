import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCartPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalCartPrice = state.totalCartPrice + newItem.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCartPrice = 0;
    },
  },
});

export const SelectedCartItems = (state) => state.cart.items;
export const SelectedCartItemPrice = (state) => state.cart.totalCartPrice;

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
