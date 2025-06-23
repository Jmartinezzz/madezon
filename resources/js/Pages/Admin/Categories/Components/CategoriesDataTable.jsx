import React, {useState, useEffect} from "react";
import { usePage } from "@inertiajs/react";
import GenericDataTable from "@/Components/GenericDataTable";
import CreateEdit from "../CreateEdit";
import { Dialog } from "primereact/dialog";

const CategoriesDataTable = ({onMount}) => {
    const { data: categories, } = usePage().props;
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [item, setItem] = useState(null);

    const onFindItem = (id) => {
        axios.get(route('admin.categories.edit', id))
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
    ];

    return (
       <>
         <GenericDataTable
            dataEndpoint="/admin/categories"
            routeName="admin.categories"
            columns={columns}
            initialData={categories}
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

export default CategoriesDataTable
