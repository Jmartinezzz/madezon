import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import GenericDataTable from "@/Components/GenericDataTable";
import CreateEdit from "../CreateEdit";
import { Dialog } from "primereact/dialog";

const OrdersDataTable = ({ onMount }) => {
    const { data: orders } = usePage().props;
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [item, setItem] = useState(null);

    const onFindItem = (id) => {
        axios.get(route('admin.orders.edit', id))
            .then(response => {
                setItem(response.data?.item);
                setShowModalEdit(true);
            });
    };

    const showCreateModal = () => {
        setItem(null);
        setShowModalEdit(true);
    }

    useEffect(() => {
        if (onMount) {
            onMount(showCreateModal);
        }
    }, [onMount]);

    const columns = [
        {
            field: "id",
            header: "ID",
            sortable: true,
            filter: true,
            filterField: "id",
            filterType: "text",
            type: "id"
        },
        {
            field: "reference",
            header: "Reference",
            filter: true,
            filterField: "reference",
            filterType: "text",
        },
        {
            field: "user.name",
            header: "User",
        },
        {
            field: "amount",
            header: "Amount",
            type: "money"
        },
        {
            field: "status",
            header: "Status",
            sortable: false,
            filterType: "dropdown",
            filter: true,
            filterField: "status",
            filterOptions: [
                { label: "Pendiente", value: 'pendiente' },
                { label: "Pagado", value: 'pagado' },
                { label: "Cancelado", value: 'cancelado' },
            ],
            type: "customBadge",
            typeOptions: [
                { text: "Pendiente", value: 'pendiente', color: 'warning' },
                { text: "Pagado", value: 'pagado', color: 'success' },
                { text: "Cancelado", value: 'cancelado', color: 'danger' },
            ],
        },
        {
            field: "payment_link",
            header: "Payment Link",
            type: "externalLink",
        },

    ];

    return (
        <>
            <GenericDataTable
                dataEndpoint="/admin/orders"
                routeName="admin.orders"
                columns={columns}
                initialData={orders}
                showGlobalFilter={false}
                useModalEdit={true}
                onFindItem={onFindItem}
                showActionColumn={true}
                showDeleteAction={false}
            />
            <Dialog
                visible={showModalEdit}
                style={{ width: '55vw' }}
                draggable={false}
                onHide={() => { setShowModalEdit(false); }}
            >
                <CreateEdit item={item} showModal={setShowModalEdit} />
            </Dialog>
        </>
    );
}

export default OrdersDataTable
