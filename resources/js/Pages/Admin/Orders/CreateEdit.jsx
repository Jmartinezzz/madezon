import GenericCreateEditForm from '@/Components/GenericCreateEditForm';
import React from 'react'

const CreateEdit = ({ item, showModal }) => {
    const statusOptions = [
        { value: 'cancelado', label: 'Cancelado' },
        { value: 'pendiente', label: 'Pendiente' },
        { value: 'pagado', label: 'Pagado' },
    ]

    return (
        <GenericCreateEditForm
            title="Order"
            item={item}
            showModal={showModal}
            fields={[
                { name: 'reference', label: 'Reference', type: 'text', disabled: true },
                { name: 'amount', label: 'Amount', type: 'currency', disabled: true },
                { name: 'status', label: 'status', type: 'dropdown', options: statusOptions, disabled: item.status !== 'pendiente' },
            ]}
            updateRoute="admin.orders.update"
            indexRoute={route('admin.orders.index')}
        />
    );
}

export default CreateEdit
