import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';

export default function Contact() {
    return (
        <UsersLayout>
            <Head title="Formulario de contacto" />

            <div className="flex justify-content-center">
                <Card title="Formulario de contacto" className='mt-5 mb-2 w-12 md:w-8'></Card>
            </div>
        </UsersLayout>
    );
}
