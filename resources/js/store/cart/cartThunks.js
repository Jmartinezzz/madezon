import {
  setInitialCart,
  addItemToState,
  removeItemFromState,
  clearCartState,
  updateQuantityInState
} from './cartSlice';
import { cartStorageService } from './cartStorageService';

export const loadCart = (userId) => (dispatch) => {
  const items = cartStorageService.load(userId);
  dispatch(setInitialCart(items));
};

export const addToCart = (product, userId) => (dispatch, getState) => {
  dispatch(addItemToState(product));
  const items = getState().cart.items;
  cartStorageService.save(userId, items);
};

export const removeFromCart = (productId, userId) => (dispatch, getState) => {
  dispatch(removeItemFromState(productId));
  const items = getState().cart.items;
  cartStorageService.save(userId, items);
};

export const clearCart = (userId) => (dispatch) => {
  dispatch(clearCartState());
  cartStorageService.clear(userId);
};

export const updateCartQuantity = (productId, newQuantity, userId) => (dispatch, getState) => {
  dispatch(updateQuantityInState({ productId, newQuantity }));
  const items = getState().cart.items;
  cartStorageService.save(userId, items);
};

export const migrateGuestCartToUserCart = (userId) => (dispatch) => {
  const guestItems = cartStorageService.load(null); // guest
  const userItems = cartStorageService.load(userId); // user_X

  // Combinar productos por ID
  const merged = [...userItems];

  guestItems.forEach((guestItem) => {
    const existing = merged.find(item => item.id === guestItem.id);
    if (existing) {
      existing.quantity += guestItem.quantity;
    } else {
      merged.push(guestItem);
    }
  });

  // Guardar nuevo carrito y limpiar guest
  cartStorageService.save(userId, merged);
  cartStorageService.clear(null);
  dispatch(setInitialCart(merged));
};

