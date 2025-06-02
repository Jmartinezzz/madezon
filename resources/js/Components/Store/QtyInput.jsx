import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { InputNumber } from 'primereact/inputnumber';
import { updateCartQuantity } from '@/store/cart/cartThunks';

export default function QtyInput({ extraClasses, product, quantity, setQuantity }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const isInCart = items.some(p => p.id === product.id);
  const handleQuantityChange = (e) => {
    const newQuantity = e.value;
    if (newQuantity >= 1) {
      if (isInCart) {
        dispatch(updateCartQuantity(product.id, newQuantity));
      } else {
        setQuantity(newQuantity);
      }
    }
  }

  return (
    <InputNumber
      className={extraClasses}
      inputId={product.id}
      value={product.quantity ?? 1}
      onValueChange={handleQuantityChange}
      showButtons
      buttonLayout="horizontal"
      step={1}
      min={1}
      decrementButtonClassName="p-button-success"
      incrementButtonClassName="p-button-success"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-minus"
      mode="decimal"
    />
  )
}
