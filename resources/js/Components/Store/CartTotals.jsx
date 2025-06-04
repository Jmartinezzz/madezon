import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { useDispatch } from 'react-redux';
import { Card } from 'primereact/card';
import { router, usePage } from '@inertiajs/react';
import { clearCart } from '@/store/cart/cartThunks';

export default function CartTotals({ items }) {
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const user = usePage().props.auth.user;
  const totalItems = items.reduce((acc, item) => acc + (item.promo_price ?? item.price) * item.quantity, 0);

  const calculateVat = () => {
    return 50
  }

  const handlePay = () => {
    setError(null)
    router.post(route('checkout.store'), { cart: items },
      {
        onSuccess: resp => {
          dispatch(clearCart(user?.id));
        },
        onError: errors => {
          setError(errors.message);
        }
      }
    )
  }

  return (
    <Card title="Totales" className='shadow-4'>
      <table className='w-full text-lg'>
        <tbody>
          <tr>
            <td>Impuesto 1:</td>
            <td className='text-right'>$50</td>
          </tr>
          <tr>
            <td>Aranceles:</td>
            <td className='text-right'>${calculateVat()}</td>
          </tr>
          <tr>
            <td>Sub Total:</td>
            <td className='text-right'>$500</td>
          </tr>
          <tr className='font-semibold text-primary'>
            <td>Total:</td>
            <td className='text-right'>${totalItems.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <Button
        className='w-full p-2 mt-3 mb-2'
        label='Proceder a Pagar'
        raised
        onClick={handlePay}
      />
      {error && (<span className='text-red-400 text-center'>{error}</span>)}
    </Card>
  )
}
