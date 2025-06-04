import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '@/Components/Store/CartItem';
import CartTotals from '@/Components/Store/CartTotals';
import { removeFromCart } from '@/store/cart/cartThunks';

export default function CheckoutIndex() {
    const items = useSelector(state => state.cart.items);
    return (
        <UsersLayout>
            <Head title="Checkout" />
            <div className="grid mt-5">
                <div className="col-12 md:col-8">
                    <div className="">
                        {(
                            items.map((product) => (
                                <div key={product.id}>
                                    <CartItem 
                                        product={product}
                                        removeFromCart={removeFromCart}
                                        isIncheckout={true} 
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="col-12 md:col-4">
                    <CartTotals items={items} />
                </div>
            </div>
        </UsersLayout>
    );
}
