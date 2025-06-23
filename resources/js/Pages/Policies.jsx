import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';

export default function Policies() {
    return (
        <UsersLayout>
            <Head title="Políticas y privacidad" />
            {/* logo */}

            <div className="flex justify-content-center">
                <Card title="Política de privacidad" className='mt-5 mb-2 w-12 md:w-8'></Card>
            </div>


        </UsersLayout>
    );
}
