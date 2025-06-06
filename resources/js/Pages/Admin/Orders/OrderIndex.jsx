import AdminLayout from '@/Layouts/AdminLayout';
import React, { useRef } from "react";
import { Head, usePage } from "@inertiajs/react";
import OrdersDataTable from "./Components/OrdersDataTable";
import { Button } from 'primereact/button';        
import { Divider } from "primereact/divider";

export default function OrderIndex() {
    const showCreateModalRef = useRef(null);
    return (
        <AdminLayout>
            <Head title="Orders" />
            <div className="grid">
                <div className="col-12">
                    <div className="card custom-shadow">
                        <div className="flex justify-content-between align-items-center">
                            <h3>Orders</h3>                           
                        </div>
                        <div style={{ marginLeft: '-2rem', marginRight: '-2rem' }}>
                            <Divider />
                        </div>
                        <OrdersDataTable onMount={(showCreateModal) => {
                            showCreateModalRef.current = showCreateModal;
                        }} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
