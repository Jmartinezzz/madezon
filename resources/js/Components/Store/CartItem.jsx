import React from 'react'
import { useDispatch } from 'react-redux';
import { usePage } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import QtyInput from './QtyInput';

export default function CartItem({ product, removeFromCart, isIncheckout = false }) {
  const dispatch = useDispatch();
  const user = usePage().props.auth.user
  const priceToShow = product.promo_price ?? product.price
  const generalClasses = {
    mainDiv: isIncheckout ? 'mb-5 ml-1 p-1 p-card shadow-4 border-round-md w-12 md:w-10' : 'mb-4',
    imgDiv: isIncheckout 
      ? 'w-12 md:w-8 h-5rem md:h-7rem'
      : 'w-full h-4rem md:h-5rem',
    col1: isIncheckout ? 'col-4' : 'col-4', // img col
    col2: isIncheckout ? 'col-8 md:col-6' : 'col-8', // name and trash col
    internalCol1: isIncheckout ? 'col-8' : 'col-9', // name and trash col
    internalCol2: isIncheckout ? 'col-4' : 'col-3', // name and trash col
  }

  return (
    <div className={`grid ${generalClasses.mainDiv}`}>
      <div className={generalClasses.col1}>
        <div className={`${generalClasses.imgDiv} overflow-hidden border-round-md`}>
          <img
            src={product.first_image_url}
            alt={product.name + " image"}
            className="w-full h-full object-cover shadow-2"
          />
        </div>
      </div>
      <div className={generalClasses.col2}>
        {/* internal grid */}
        <div className="grid">
          <div className={`${generalClasses.internalCol1} px-1 flex align-items-center`}>
            {product.name}
          </div>
          <div className={`${generalClasses.internalCol2} flex justify-content-end`}>
            <Button
              icon="pi pi-trash"
              severity="danger"
              size={isIncheckout ? 'normal' : 'small'}
              text
              rounded
              tooltip='remover del carrito'
              tooltipOptions={{ position: 'top' }}
              onClick={() => dispatch(removeFromCart(product.id, user?.id))}
            />
          </div>
          <div className="col-12 flex gap-3 align-items-center">
            ${(priceToShow * product.quantity).toFixed(2)}
            <QtyInput extraClasses="wcus p-inputtext-sm text-sm" product={product} />
          </div>
          { product.quantity > 1 && (
            <div className='mt-0 px-1'>
              {product.promo_price && (
                <span className="text-500 text-sm line-through">${product.price}</span>
              )}
              <span className='text-500 text-sm'> {`$${priceToShow} por un.`}</span>
            </div>
          )}
        </div>
      </div>
      {!isIncheckout && <Divider /> }      
    </div>
  )
}
