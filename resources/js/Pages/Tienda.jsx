import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import { Button } from 'primereact/button';
import ProductCard from '@/Components/Store/ProductCard';


export default function Tienda({ products }) {
    
    return (
        <UsersLayout>
            <Head title="Tienda" />

            <div className="grid mt-5 row-gap-5">
                {products.length > 0 ? (
                    products.map((product) => (
                    <div key={product.id} className="col-12 sm:col-6 lg:col-4 xl:col-3 h-full">
                        <ProductCard product={product} />
                    </div>
                    ))
                ) : (
                    <div className="col-12 p-4">
                     <div className="flex justify-content-center mt-2">
                        <div className="text-center text-gray-800 p-4 flex flex-column w-12 md:w-9 xl:w-6">
                            <img src="/assets/img/undraw_empty_search.svg" alt="sin productos" />
                            <p className='text-xl'>No hay productos disponibles.</p>
                        </div>
                    </div>
                    </div>
                )}             
            </div>
        </UsersLayout>
    );
}
