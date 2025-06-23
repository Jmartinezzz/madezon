import AdminLayout from '@/Layouts/AdminLayout';
import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import CategoriesDataTable from "./Components/CategoriesDataTable";
import { Button } from 'primereact/button';        
import { Divider } from "primereact/divider";

export default function CategoryIndex() {
    const showCreateModalRef = useRef(null);
    return (
        <AdminLayout>
            <Head title="Categories" />
            <div className="grid">
                <div className="col-12">
                    <div className="card custom-shadow">
                        <div className="flex justify-content-between align-items-center">
                            <h3>Categories</h3>
                            <Button
                                icon="pi pi-plus"
                                label="New Category"
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
                        <CategoriesDataTable onMount={(showCreateModal) => {
                            showCreateModalRef.current = showCreateModal;
                        }} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
