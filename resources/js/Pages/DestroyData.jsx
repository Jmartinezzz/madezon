import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';

export default function DestroyData() {
    return (
        <UsersLayout>
            <Head title="Eliminación de datos" />
            <div className="flex justify-content-center">
                <Card title="Instrucciones de Eliminación de Datos" className='mt-5 mb-2 w-12 md:w-8'></Card>
            </div>
        </UsersLayout>
    );
}
