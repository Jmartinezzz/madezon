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
                    <div key={product.id} className="col-6 lg:col-4 xl:col-3 h-full">
                        <ProductCard product={product} />
                    </div>
                    ))
                ) : (
                    <div className="col-12 text-center p-4">
                        <p>No hay productos disponibles.</p>
                    </div>
                )}             
            </div>
        </UsersLayout>
    );
}
