import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useToast } from "@/Context/ToastContext";
import { Button } from 'primereact/button';
import { addToCart, removeFromCart } from '@/store/cart/cartThunks';

export default function AddRemoveButton({ extraClasses, extraStyle, product }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const isInCart = items.some(p => p.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    showToast('success', 'Éxito', 'Producto agregado al carrito', 3000);
  };

  const handleRemoveToCart = () => {
    dispatch(removeFromCart(product.id));
    showToast('success', 'Éxito', 'Producto removido del carrito', 3000);
  };

  return (
    <Button
      className={extraClasses}
      severity={isInCart ? 'danger' : 'primary'}
      style={extraStyle}
      label={isInCart ? 'Remover del carrito' : 'Agregar al carrito'}
      rounded
      raised
      onClick={(e) => {
        e.stopPropagation()
        isInCart ? handleRemoveToCart() : handleAddToCart();
      }}
    />
  )
}
