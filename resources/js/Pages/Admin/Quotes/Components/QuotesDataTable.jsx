import React, {useState, useEffect} from "react";
import { usePage } from "@inertiajs/react";
import GenericDataTable from "@/Components/GenericDataTable";
import CreateEdit from "../CreateEdit";
import { Dialog } from "primereact/dialog";

const ProductsDataTable = ({onMount}) => {
    const { data: quotes } = usePage().props;
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [item, setItem] = useState(null);

    const onFindItem = (id) => {
        axios.get(route('admin.quotes.edit', id))
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
            field: "type",
            header: "Type",
            sortable: false,
            filterType: "dropdown",
            filter: true,
            filterField: "type",
            filterOptions: [
                { label: "By Me", value: 1 },
                { label: "By Madezon", value: 2 },                
            ],
            type: "customBadge",
            typeOptions: [
                { text: "By Me", value: 1, color: 'info' },
                { text: "By Madezon", value: 2, color: 'success' },
            ],
        },
        {
            field: "user.name",
            header: "Creation User",
            // filter: true,
            // filterField: "name",
            // filterType: "text",
        },
        {
            field: "url",
            header: "Product link",
            type: "externalLink",
        },
        {
            field: "name",
            header: "Name",
            filter: true,
            filterField: "name",
            filterType: "text",
        },
        {
            field: "phone",
            header: "Phone",
            filter: true,
            filterField: "phone",
            filterType: "text",
        },
        {
            field: "email",
            header: "Email",
            filter: true,
            filterField: "email",
            filterType: "text",
        },
        {
            field: "paying_price",
            header: "paid price",
            customWidth: "8",
            type: "money"
        },
        {
            field: "weight",
            header: "Weight",
            customWidth: "6",
        },
        {
            field: "quantity",
            header: "Quantity",
            extraClasses: "text-center",
            customWidth: "6",         
        },        
        {
            field: "category",
            header: "Category",
            customWidth: "7",
        },          
        {
            field: "image",
            header: "Image",
            type: "image",
        },          
        {
            field: "status",
            header: "Status",
            sortable: false,
            filterType: "dropdown",
            filter: true,
            filterField: "status",
            filterOptions: [
                { label: "Pendiente", value: "pendiente" },
                { label: "Cancelado", value: "cancelado" },
                { label: "En proceso", value: "en proceso" },
                { label: "Completado", value: "completado" },
            ],
            type: "customBadge",
            typeOptions: [
                { text: "Pendiente", value: "pendiente", color: 'warning' },
                { text: "Cancelado", value: "cancelado", color: 'danger' },
                { text: "En proceso", value: "en proceso", color: 'info' },
                { text: "Completado", value: "completado", color: 'success' }
            ],
        },
    ];

    return (
       <>
         <GenericDataTable
            dataEndpoint="/admin/quotes"
            routeName="admin.quotes"
            columns={columns}
            initialData={quotes}
            showGlobalFilter={false}
            useModalEdit={true}
            onFindItem={onFindItem}
            showActionColumn={true}
            rowClassName={(rowData) => {
                return rowData?.status === 'pendiente' ? 'bg-orange-100' : '';
            }}
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

export default ProductsDataTable
