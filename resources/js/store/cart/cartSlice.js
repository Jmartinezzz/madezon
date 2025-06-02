import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    setInitialCart: (state, action) => {
      state.items = action.payload;
    },
    addItemToState: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += product.quantity ?? 1;
      } else {
        state.items.push({ ...product, quantity: product.quantity ?? 1 });
      }
    },
    removeItemFromState: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
    },
    clearCartState: (state) => {
      state.items = [];
    },
    updateQuantityInState: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const existing = state.items.find(item => item.id === productId);
      if (existing) {
        existing.quantity = newQuantity;
      }
    },
  }
});

export const {
  setInitialCart,
  addItemToState,
  removeItemFromState,
  clearCartState,
  updateQuantityInState
} = cartSlice.actions;

export default cartSlice.reducer;
