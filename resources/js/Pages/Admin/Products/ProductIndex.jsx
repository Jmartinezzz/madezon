import AdminLayout from '@/Layouts/AdminLayout';
import React, { useRef } from "react";
import { Head, usePage } from "@inertiajs/react";
import ProductsDataTable from "./Components/ProductsDataTable";
import { Button } from 'primereact/button';        
import { Divider } from "primereact/divider";

export default function ProductIndex() {
    const showCreateModalRef = useRef(null);
    return (
        <AdminLayout>
            <Head title="Products" />
            <div className="grid">
                <div className="col-12">
                    <div className="card custom-shadow">
                        <div className="flex justify-content-between align-items-center">
                            <h3>Products</h3>
                            <Button
                                icon="pi pi-plus"
                                label="New Product"
                                severity="success"
                                size="small"
                                onClick={() => {
                                    if (showCreateModalRef.current) {
                                        showCreateModalRef.current();
                                    }
                                }}
                            />
                        </div>
                        <div style={{ marginLeft: '-2rem', marginRight: '-2rem' }}>
                            <Divider />
                        </div>
                        <ProductsDataTable onMount={(showCreateModal) => {
                            showCreateModalRef.current = showCreateModal;
                        }} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
