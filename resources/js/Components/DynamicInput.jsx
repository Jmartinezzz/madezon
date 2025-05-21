import React, {useEffect} from 'react';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from 'primereact/inputswitch';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import ValidationError from '@/Components/ValidationError';
import { InputNumber } from 'primereact/inputnumber';

const DynamicInput = ({ field, data, setData, errors }) => {

    const renderInput = () => {
        switch (field.type) {
            case 'switch':
                return (
                    <div className='w-full'>
                        <InputSwitch
                            id={field.name}
                            name={field.name}
                            checked={!!(data[field.name])}
                            onChange={e => setData(field.name, e.value)}
                        />
                    </div>
                );
            case 'textarea':
                return (
                    <InputTextarea
                        id={field.name}
                        name={field.name}
                        rows={field.rows}
                        value={data[field.name]}
                        onChange={e => setData(field.name, e.target.value)}
                        placeholder={field.placeholder || ''}
                        className={`w-full ${errors[field.name] ? 'invalid' : ''}`}
                    />
                );
            case 'dropdown':
                useEffect(() => {
                    if (field.value) {
                        // se asigna el valor que se establecio en props
                        setData(field.name, field.value);
                    }
                }, [field.value]);
                return (
                    <Dropdown
                        id={field.name}
                        name={field.name}
                        value={data[field.name] || field.value}
                        optionLabel="label"
                        optionValue="value"
                        options={field.options}
                        filter
                        disabled={field.disabled}
                        onChange={e => setData(field.name, e.target.value)}
                        placeholder={field.placeholder || ''}
                        className={`w-full ${errors[field.name] ? 'invalid' : ''}`}
                    />
                );
            case 'currency':
                 return (
                    <InputNumber
                        inputId={field.name}
                        name={field.name}
                        value={data[field.name]}
                        mode="currency"
                        currency="USD"
                        locale="en-US"
                        onValueChange={e => setData(field.name, e.target.value)}
                        placeholder={field.placeholder || ''}
                        className={`w-full ${errors[field.name] ? 'invalid' : ''}`}
                        disabled={field.disabled}
                    />
                );
            case 'quantity':
                 return (
                    <InputNumber
                        id={field.name}
                        name={field.name}
                        value={data[field.name]}
                        showButtons
                        min={0} 
                        max={5000}
                        minFractionDigits={0}
                        maxFractionDigits={0}
                        onValueChange={e => setData(field.name, e.target.value)}
                        placeholder={field.placeholder || ''}
                        className={`custom-inputnumber w-full ${errors[field.name] ? 'invalid' : ''}`}
                        disabled={field.disabled}
                    />
                );
            case 'text':
            default:
                return (
                    <InputText
                        id={field.name}
                        name={field.name}
                        type={field.type || 'text'}
                        value={data[field.name]}
                        onChange={e => setData(field.name, e.target.value)}
                        placeholder={field.placeholder || ''}
                        className={`w-full ${errors[field.name] ? 'invalid' : ''}`}
                        disabled={field.disabled}
                    />
                );
        }
    };

    return (
        <div key={field.name} className="my-3 field">
            <label htmlFor={field.name}>{field.label}: {field.is_required && <span className='text-red-500'>*</span>}</label>
            {renderInput()}
            {errors[field.name] && <ValidationError message={errors[field.name]} />}
        </div>
    );
};

export default DynamicInput;
