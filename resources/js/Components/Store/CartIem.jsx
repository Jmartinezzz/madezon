import React from 'react'
import { useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import QtyInput from './QtyInput';

export default function CartIem({ product, removeFromCart }) {
  const dispatch = useDispatch();
  
  return (
    <div className="grid mb-4">
      <div className="col-4">
        <div className="w-full h-3rem md:h-5rem overflow-hidden border-round-md">
          <img
            src={product.first_image_url}
            alt={product.name + " image"}
            className="w-full h-full object-cover shadow-2"
          />
        </div>
      </div>
      <div className="col-8">
        <div className="grid">
          <div className="px-1 col-9 flex align-items-center">
            {product.name}
          </div>
          <div className="col-3 flex justify-content-end">
            <Button
              icon="pi pi-trash"
              severity="danger"
              size="small"
              text
              rounded
              tooltip='remover del carrito'
              tooltipOptions={{ position: 'top' }}
              onClick={() => dispatch(removeFromCart(product.id))}
            />
          </div>
          <div className="col-12 flex gap-3 align-items-center">
            ${(product.price * product.quantity).toFixed(2)}
            <QtyInput extraClasses="wcus p-inputtext-sm text-sm" product={product} />
          </div>
          { product.quantity > 1 && (
            <div className='mt-0'>
              <span className='text-500 text-sm'>{`$${product.price} por un.`}</span>
            </div>
          )}
        </div>
      </div>
      <Divider />
    </div>
  )
}
