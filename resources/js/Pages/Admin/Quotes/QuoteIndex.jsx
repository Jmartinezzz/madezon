import AdminLayout from '@/Layouts/AdminLayout';
import React, { useRef } from "react";
import { Head, usePage } from "@inertiajs/react";
import QuotesDataTable from "./Components/QuotesDataTable";
import { Button } from 'primereact/button';        
import { Divider } from "primereact/divider";

export default function QuoteIndex() {
    const showCreateModalRef = useRef(null);
    return (
        <AdminLayout>
            <Head title="Quotes" />
            <div className="grid">
                <div className="col-12">
                    <div className="card custom-shadow">
                        <div className="flex justify-content-between align-items-center">
                            <h3>Quotes</h3>                           
                        </div>
                        <div style={{ marginLeft: '-2rem', marginRight: '-2rem' }}>
                            <Divider />
                        </div>
                        <QuotesDataTable onMount={(showCreateModal) => {
                            showCreateModalRef.current = showCreateModal;
                        }} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
