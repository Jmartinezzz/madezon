import React, { useEffect, useRef } from 'react';
import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function CheckoutWidget({ paymentLink, paymentQr }) {

    return (
        <UsersLayout>
            <Head title="Pago con Wompi" />
            <div className="flex justify-content-center mt-5">
                <Card className='shadow-4 w-11 sm:w-8 md:w-6 lg:w-4 xl:w-3 border-round-md surface-200'>
                    <div className="w-full h-20rem lg:h-18rem overflow-hidden border-round-xl">
                        <img
                            src={paymentQr}
                            alt="Card"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <Button
                        className='w-full p-2 mt-4 flex justify-content-center gap-2 align-items-start'  
                        raised
                        onClick={() => {
                            window.location.href = paymentLink
                        }} 
                    >
                        <i className='pi pi-external-link'></i>
                        Abrir enlace de pago
                    </Button>
                </Card>
            </div>
        </UsersLayout>
    );
}
