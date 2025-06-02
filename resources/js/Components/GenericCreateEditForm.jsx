import { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { useToast } from "@/Context/ToastContext";
import DynamicInput from "./DynamicInput";

const GenericCreateEditForm = ({title, item, showModal, fields, indexRoute, storeRoute, updateRoute, isSpecialRoute = false, specialRoute}) => {
    const { showToast } = useToast();
    let action

    const { data, setData, post, put, processing, errors, clearErrors } = useForm(
        fields.reduce((acc, field) => {
            acc[field.name] = field.defaultValue || '';

            //agregamos los valores por defecto de los booleanos
            switch(field.type)
            {
                case 'checkBoxGroup':
                    field.options.map(option =>
                    acc[option.name] = 0);
                    break;
                case 'toggleButton':
                    acc[field.name] = 0;
                    break;
            }

            return acc;
        }, {})
    );
    if (item == undefined || item == null) {
        action = 'create';
    }else{
        action = 'edit';
    }

    useEffect(() => {
        if (item) {
            const newData = {};
            fields.forEach(field => {
                if (field.type === 'checkList' && Array.isArray(item[field.name])) {
                    newData[field.name] = item[field.name].map(option => option.id);
                }                
                else if(field.type === 'checkBoxGroup'){
                    field.options.map(option =>
                        newData[option.name] = item[option.name] || 0,
                    );
                }
                else {
                    newData[field.name] = item[field.name] || '';
                }
            });
            setData(newData);
        }
    }, [item]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(item) {
            const routesNeedPostToUpdate = ['admin.products.update'];
            const isPostRequired = routesNeedPostToUpdate.includes(updateRoute)
            const submit = isPostRequired ? post : put;
            submit(route(updateRoute, item.id),
            {
                onSuccess: () => {
                    showToast('success', 'Success', `${title} edited with success`, 4000);
                    router.get(indexRoute);
                },
                onError: (error) => {
                    console.log('Error:', error);
                },
            });
        } else {
            post(storeRoute, {
                onSuccess: () => {
                    showToast('success', 'Success', `${title} created with success`, 4000);
                    router.get(indexRoute);
                },
                onError: (error) => {
                    console.log('Error:', error);
                },
            });
        }
    };

    const handleTitle = () => action === 'create' ? 'Create' : 'Edit';

    const headerContent = (
        <div>
            <h5 className="font-semibold">{handleTitle()} {title}</h5>
        </div>
    );

    return (
        <>
            <div className="container mt-">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="car">
                            <div className="card-header">
                                {headerContent}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="card-body">
                                    {fields.map(field => (
                                        <DynamicInput key={field.name} field={field} data={data} setData={setData} errors={errors} clearErrors={clearErrors} />
                                    ))}
                                </div>
                                <div className="card-footer flex justify-content-end gap-3">
                                    <Button size="small" type="submit" label={handleTitle()} severity="primary" icon="pi pi-check" loading={processing} />
                                    <Button size="small" type="button" label="Cancel" severity="danger" outlined onClick={() => showModal(false)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GenericCreateEditForm;
