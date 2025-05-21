import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const InputDynamicFilter = ({ filterType = "text", value, onChange, placeholder, options }) => {
    switch (filterType) {
        case 'dropdown':
        case 'boolean':
            return <Dropdown value={value} options={options} onChange={onChange} placeholder={placeholder} showClear filter />;
        case 'text':
        default:
            return <InputText onChange={onChange} placeholder={placeholder} />;
    }
};

export default InputDynamicFilter;