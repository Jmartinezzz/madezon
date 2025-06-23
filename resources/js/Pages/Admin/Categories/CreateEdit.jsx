import GenericCreateEditForm from '@/Components/GenericCreateEditForm';
import React from 'react'

const CreateEdit = ({ item, showModal }) => {
    return (
        <GenericCreateEditForm
            title="Category"
            item={item}
            showModal={showModal}
            fields={[
                { name: 'name', label: 'Name', placeholder: 'Name', type: 'text' },                
            ]}
            storeRoute={route('admin.categories.store')}
            updateRoute="admin.categories.update"
            indexRoute={route('admin.categories.index')}
        />
    );
}

export default CreateEdit
