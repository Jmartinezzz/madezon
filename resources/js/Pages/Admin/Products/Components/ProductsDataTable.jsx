import React, {useState, useEffect} from "react";
import { usePage } from "@inertiajs/react";
import GenericDataTable from "@/Components/GenericDataTable";
import CreateEdit from "../CreateEdit";
import { Dialog } from "primereact/dialog";

const ProductsDataTable = ({onMount}) => {
    const { data: products } = usePage().props;
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [item, setItem] = useState(null);

    const onFindItem = (id) => {
        axios.get(route('admin.products.edit', id))
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
            field: "name",
            header: "Name",
            filter: true,
            filterField: "name",
            filterType: "text",
        },
        {
            field: "stock",
            header: "Stock",
            customWidth: "8",
            extraClasses: "text-center"
        },
        {
            field: "short_description",
            header: "Short Description",            
        },
        {
            field: "price",
            header: "Price",
            type: "money"
        },
        {
            field: "promo_price",
            header: "Promo Price",
        },          
        {
            field: "is_active",
            header: "Active",
            sortable: false,
            filter: true,
            filterField: "is_active",
            filterType: "dropdown",
            filterOptions: [
                { label: "Active", value: 1 },
                { label: "Inactive", value: 0 },
            ],
            boolField: "is_active",
            trueValue: "Active",
            falseValue: "Inactive",
            type: "customBoolean"
        },

    ];

    return (
       <>
         <GenericDataTable
            dataEndpoint="/admin/products"
            routeName="admin.products"
            columns={columns}
            initialData={products}
            showGlobalFilter={false}
            useModalEdit={true}
            onFindItem={onFindItem}
            showActionColumn={true}
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
