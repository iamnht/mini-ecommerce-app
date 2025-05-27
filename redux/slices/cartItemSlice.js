import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [],
    cartItemCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }

      state.cartItemCount = state.cartItems.reduce(
        (total, item) => total + (item.quantity || 1),
        0
      );
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.cartItemCount = state.cartItems.length;
    },
  },
});

export const { addItem, removeItem } = cartItemSlice.actions;
export default cartItemSlice.reducer;
