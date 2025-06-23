import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';

export default function Dashboard({ entities }) {

    return (
        <AdminLayout>
            <Head title="Dashboard" />
            <div className="">
                <div className="text-gray-900">
                    <section className='grid row-gap-3'>
                        {entities.map((item, i) => (
                            <div className="col-12 md:col-6 lg:col-4">
                                <div className="surface-0 shadow-3 p-3 border-1 border-50 border-round">
                                    <div className="flex justify-content-between mb-3">
                                        <div>
                                            <span className="block text-500 font-medium mb-3">{ item.entity }</span>
                                            <div className="text-900 font-medium text-xl">{ item.count }</div>
                                        </div>
                                        <div 
                                            className="flex align-items-center justify-content-center bg-blue-100 hover:bg-blue-200 border-round" style={{ width: '2.5rem', height: '2.5rem' }}
                                            onClick={() => router.get(item.redirect)}
                                        >
                                            <i 
                                                className={`pi ${item.icon} text-blue-500 text-xl cursor-pointer`}
                                            ></i>
                                        </div>
                                    </div>
                                    {/* <span className="text-green-500 font-medium">24 new </span>
                                    <span className="text-500">since last visit</span> */}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </AdminLayout>
    );
}
