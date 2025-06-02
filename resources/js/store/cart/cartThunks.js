import {
  setInitialCart,
  addItemToState,
  removeItemFromState,
  clearCartState,
  updateQuantityInState
} from './cartSlice';
import { cartStorageService } from './cartStorageService';

export const loadCart = () => (dispatch, getState) => {
  const userId = getState().auth?.user?.id ?? null;
  const items = cartStorageService.load(userId);
  dispatch(setInitialCart(items));
};

export const addToCart = (product) => (dispatch, getState) => {
  const userId = getState().auth?.user?.id ?? null;
  dispatch(addItemToState(product));
  const items = getState().cart.items;
  cartStorageService.save(userId, items);
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const userId = getState().auth?.user?.id ?? null;
  dispatch(removeItemFromState(productId));
  const items = getState().cart.items;
  cartStorageService.save(userId, items);
};

export const clearCart = () => (dispatch, getState) => {
  const userId = getState().auth?.user?.id ?? null;
  dispatch(clearCartState());
  cartStorageService.clear(userId);
};

export const updateCartQuantity = (productId, newQuantity) => (dispatch, getState) => {
  dispatch(updateQuantityInState({ productId, newQuantity }));
  const userId = getState().auth?.user?.id ?? null;
  const items = getState().cart.items;
  cartStorageService.save(userId, items);
};
