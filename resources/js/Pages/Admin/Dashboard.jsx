import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AdminLayout>
            <Head title="Dashboard" />
            <div className="">
                <div className="text-gray-900">
                    You're logged in! ds
                </div>
            </div>

        </AdminLayout>
    );
}
