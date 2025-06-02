import React, { useRef, useEffect, useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import ValidationError from '@/Components/ValidationError';


const UploadImages = ({ field, data, setData, errors }) => {
    const [existingImages, setExistingImages] = useState(null)
    const fileUploadRef = useRef(null);

    useEffect(() => {
        if (data[field.name]) {
            const isText = data[field.name].some(img => typeof img?.image_url === "string")
            if (isText) {
                setExistingImages(data[field.name]);
                setData(field.name, []);
            }
        }
    }, [data, data[field.name]]);

    const onTemplateSelect = (e) => {
        setData(field.name, e.files)
    };

    const onTemplateRemove = (file, callback) => {
        const items = data[field.name].filter(loadedFiles => loadedFiles.name !== file.name)
        setData(field.name, items)
        callback();
    };

    const onTemplateClear = () => {
        setData(field.name, [])
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, cancelButton } = options;

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {cancelButton}
            </div>
        );
    };

    // errores
    const handleErrors = () => {
        const keys = Object.keys(errors)
        const ImageErrorIndex = keys.findIndex(key => key.includes('images'))
        if (ImageErrorIndex == -1) {
            return ""
        }
        const imageNumber = getImageNumber(keys[ImageErrorIndex])
        const errorText = errors[keys[ImageErrorIndex]]
        const textToFind = "s." + (imageNumber - 1)

        return errorText.replace(textToFind, " " + imageNumber)
    }

    const getImageNumber = (string) => {
        const parts = string.split('.')
        return parseInt(parts[1]) + 1
    }

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-2 p-3" style={{ fontSize: '3em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Drag and Drop Image Here
                </span>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };
    const handleRemoveImage = (img) => {
        axios.post(route('admin.products.removeImage', img))
            .then(re => {
                setExistingImages(prevImages => prevImages.filter(prevImg => prevImg.id !== img.id))
            })
    }

    return (
        <div>
            <div className="flex overflow-x-auto mb-3">
            {existingImages && existingImages.map((img, index) => (
                <div className='my-3 mr-3' style={{ position: 'relative', display: 'inline-block' }} key={index}>
                    <img
                        src={img.image_url}
                        alt="preview"
                        style={{ width: '90px', height: '90px', borderRadius: '8px' }}
                    />
                    <button
                        type='button'
                        onClick={() => handleRemoveImage(img)} // tu función para quitar imagen
                        style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-10px',
                            background: 'red',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        ×
                    </button>
                </div>

            ))
            }
            </div>
            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

            <FileUpload
                ref={fileUploadRef}
                name={field.name}
                multiple
                accept="image/jpeg, image/png"
                maxFileSize={3000000}
                onSelect={onTemplateSelect}
                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                cancelOptions={cancelOptions}
            />
            {errors && <ValidationError message={handleErrors()} />}
        </div>
    )
}

export default UploadImages

