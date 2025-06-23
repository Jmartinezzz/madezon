import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';

export default function Conditions() {
    return (
        <UsersLayout>
            <Head title="Términos y condiciones" />

            <div className="flex justify-content-center">
                <Card title="Términos y condiciones" className='mt-5 mb-2 w-12 md:w-8'></Card>
            </div>
        </UsersLayout>
    );
}
