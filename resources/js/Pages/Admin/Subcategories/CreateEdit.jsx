import GenericCreateEditForm from '@/Components/GenericCreateEditForm';
import React from 'react'

const CreateEdit = ({ item, showModal, categories }) => {
    return (
        <GenericCreateEditForm
            title="Category"
            item={item}
            showModal={showModal}
            fields={[
                { name: 'name', label: 'Name', placeholder: 'Name', type: 'text' },              
                { name: 'category_id', label: 'Category', placeholder: 'Select category', type: 'dropdown', options: categories },              
            ]}
            storeRoute={route('admin.subcategories.store')}
            updateRoute="admin.subcategories.update"
            indexRoute={route('admin.subcategories.index')}
        />
    );
}

export default CreateEdit
