import AdminLayout from '@/Layouts/AdminLayout';
import React, { useRef } from "react";
import { Head } from "@inertiajs/react";
import SubcategoriesDataTable from "./Components/SubcategoriesDataTable";
import { Button } from 'primereact/button';        
import { Divider } from "primereact/divider";

export default function SubcategoryIndex() {
    const showCreateModalRef = useRef(null);
    return (
        <AdminLayout>
            <Head title="Sub Categories" />
            <div className="grid">
                <div className="col-12">
                    <div className="card custom-shadow">
                        <div className="flex justify-content-between align-items-center">
                            <h3>Sub Categories</h3>
                            <Button
                                icon="pi pi-plus"
                                label="New Sub Category"
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
                        <SubcategoriesDataTable onMount={(showCreateModal) => {
                            showCreateModalRef.current = showCreateModal;
                        }} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
