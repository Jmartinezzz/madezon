import GenericCreateEditForm from '@/Components/GenericCreateEditForm';
import React from 'react'

const CreateEdit = ({ item, showModal }) => {
    return (
        <GenericCreateEditForm
            title="Product"
            item={item}
            showModal={showModal}
            fields={[
                { name: 'name', label: 'Name', placeholder: 'Name', type: 'text' },
                { name: 'description', label: 'Description', placeholder: 'Description', type: 'textarea', rows: '3' },
                { name: 'short_description', label: 'Short Description', placeholder: 'Short Description', type: 'textarea' },
                { name: 'price', label: 'Price', placeholder: 'Price', type: 'currency' },
                { name: 'promo_price', label: 'Promo Price', placeholder: 'Promo price', type: 'currency' },
                { name: 'stock', label: 'Stock', placeholder: 'stock', type: 'quantity' },
                { name: 'is_active', label: 'Active', type: 'switch' },
            ]}
            storeRoute={ route('admin.products.store') }
            updateRoute="seguros.update"
            indexRoute=''
        />
    );
}

export default CreateEdit
