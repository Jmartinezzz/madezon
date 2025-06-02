import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';
import AddRemoveButton from '@/Components/Store/AddRemoveButton';
import QtyInput from '@/Components/Store/QtyInput';
import { Galleria } from 'primereact/galleria';
import AddProductControls from '@/Components/Store/AddProductControls';


export default function ProductsShow({ product }) {
    const itemTemplate = (item) => {
        return <img src={item.image_url} alt={product.name} className="gallery-img" />;
    }

    const thumbnailTemplate = (item) => {
        return <img className='h-3rem w-4rem block' src={item.image_url} alt={product.name} />;
    }

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 2
        }
    ];

    return (
        <UsersLayout>
            <Head title={product.name} />

            <div className="mt-5">
                <Card className='shadow-5 border-round-lg'>
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <Galleria
                                value={product.images}
                                responsiveOptions={responsiveOptions}
                                numVisible={5}
                                circular
                                style={{ maxWidth: '640px' }}
                                showItemNavigators
                                item={itemTemplate}
                                thumbnail={thumbnailTemplate}
                            />
                        </div>
                        <div className="col-12 md:col-6">
                            <div className="flex justify-content-center md:justify-content-between">
                                <h2 className='hidden md:block text-primary text-3xl'>${product.price}</h2>
                                <h2 className='text-3xl'>{product.name}</h2>
                            </div>
                            <p className='line-height-3 text-lg'>{product.description}</p>
                            <h2 className='md:hidden text-center text-primary text-3xl'>${product.price}</h2>
                            <AddProductControls product={product} />
                        </div>
                    </div>
                </Card>
            </div>
        </UsersLayout>
    );
}
