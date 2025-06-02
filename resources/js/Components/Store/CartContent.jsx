import React from 'react'
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { removeFromCart } from '@/store/cart/cartThunks';
import CartITem from './CartIem'

export default function CartContent() {
  const items = useSelector(state => state.cart.items);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {items.length === 0 ? (
        <p>¡Tu carrito vacío!</p>
      ) : (
        <>
          <div className="vs-cart-content mt-2 overflow-y-auto overflow-x-hidden">
            {(
              items.map((product) => (
                <div key={product.id}>
                  <CartITem product={product} removeFromCart={removeFromCart} />
                </div>
              ))
            )}
          </div>
          <div className="grid mt-5">
            <div className="col-6">
              <span>Sub total:</span>
            </div>
            <div className="col-6 text-right">
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="col-6 text-2xl text-primary font-semibold">
              <span>Total:</span>
            </div>
            <div className="col-6 text-right text-2xl text-primary font-semibold">
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Button className='w-full font-semibold mt-3' label="Comprar" />
        </>
      )
      }
    </>
  )
}
