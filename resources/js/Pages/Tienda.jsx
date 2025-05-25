import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import { Button } from 'primereact/button';
import ProductCard from '@/Components/Store/ProductCard';


export default function Tienda() {
    return (
        <UsersLayout>
            <Head title="Tienda" />

            <div className="grid mt-5 row-gap-5">
                <div className="col-6 lg:col-4 xl:col-3 h-full">
                    <ProductCard text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
          numquam deserunt quisquam repellat libero asperiores earum nam nobis" testurl="/assets/img/hero-1.png" />
                </div>
                <div className="col-6 lg:col-4 xl:col-3 h-full">
                    <ProductCard text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
        repellat libero asperiores earum nam nobis numquam deserunt quisquam repellat libero asperiores earum nam nobis, repellat libero asperiores earum nam nobis repellat libero asperiores earum nam nobis culpa ratione quam perferendis esse, cupiditate neque quas!" testurl="/assets/img/phone.webp" />
                </div>
                <div className="col-6 lg:col-4 xl:col-3 h-full">
                    <ProductCard text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
          numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" testurl="/assets/img/hero-1.png" />
                </div>
                <div className="col-6 lg:col-4 xl:col-3 h-full">
                    <ProductCard text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae" testurl="/assets/img/hero-1.png" />
                </div>
            </div>
        </UsersLayout>
    );
}
