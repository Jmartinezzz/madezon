import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import moment from '@/moment-config';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

export default function Orders({ orders }) {
    const getSeverity = (status) => {
        switch (status) {
            case 'cancelado':
                return 'danger';
            case 'pendiente':
                return 'warning';
            case 'pagado':
                return 'primary';
            default:
                break;
        }
    }

    return (
        <UsersLayout>
            <Head title="Tus Ordenes" />
            <div>
                {orders.length === 0 ? (
                    <div className="flex justify-content-center mt-6">
                        <div className="text-center text-gray-600 p-4 border rounded shadow-sm flex flex-column">
                            <img src="/assets/img/undraw_no_orders.svg" alt="sin ordenes" />
                            Aún no hay órdenes realizadas.
                        </div>
                    </div>
                ) : (
                    <Card title="Historial de Ordenes" className="shadow-4 mt-5 border-round-md">
                        <Accordion multiple className="w-full">
                            {orders.map((order) => (
                                <AccordionTab key={order.id} header={`Orden #${order.id}`}>
                                    <div className="p-1">
                                        <div className="flex justify-content-between">
                                            <span>Referencia: <Tag severity="info" value={order.reference}></Tag></span>
                                            <div className='flex flex-column'>
                                                <span>Estado: <Tag severity={getSeverity(order.status)} value={_.capitalize(order.status)}></Tag></span>
                                                <span className='text-sm text-600 mt-1 text-right'>{moment(order.created_at).format('LL')}</span>
                                            </div>
                                        </div>
                                        <div className='grid'>
                                            {order.items.map((item) => (
                                                <div className="col-12 md:col-6 lg:col-4 mt-3" key={item.id}>
                                                    <div className='shadow-5 border-round-md p-3 flex gap-5'>
                                                        <div className='w-3 h-4rem md:h-5rem overflow-hidden border-round-md'>
                                                            <img
                                                                src={item.product.first_image_url}
                                                                alt={item.product.name + " image"}
                                                                className="w-full h-full object-cover shadow-2"
                                                            />
                                                        </div>
                                                        <div className='flex flex-column gap-1'>
                                                            <span>{item.product.name}</span>
                                                            <span>${item.price} x {item.quantity}</span>
                                                            <span className='mt-2 font-semibold'>${(item.price * item.quantity).toFixed(2)}</span>
                                                       </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex align-items-baseline gap-2 mt-3">
                                            <Button
                                                className='p-2 mt-4 flex justify-content-center gap-2 align-items-start'  
                                                raised
                                                disabled={order.status != "pendiente"}
                                                onClick={() => {
                                                    // window.location.href = order.payment_link
                                                    window.open(order.payment_link, '_blank');
                                                }} 
                                            >
                                                <i className='pi pi-external-link'></i>
                                                Enlace de pago
                                            </Button>
                                           { order.status != "pendiente" && (
                                            <>
                                                <Tooltip target={`#info${order.id}`} />
                                                <i
                                                    id={`info${order.id}`}
                                                    className="pi pi-info-circle text-sm"
                                                    data-pr-tooltip="Si el estado de la orden es pagado o cancelado el enlace estará deshabilitado"
                                                    data-pr-position="right"
                                                ></i>
                                            </>
                                           )}
                                        </div>                                        
                                        <div className="flex justify-content-end mt-5 text-lg font-semibold">
                                            <span>Total: {order.amount}</span>
                                        </div>                                        
                                    </div>
                                </AccordionTab>
                            ))}
                        </Accordion>
                    </Card>
                )}
            </div>
        </UsersLayout>
    );
}
