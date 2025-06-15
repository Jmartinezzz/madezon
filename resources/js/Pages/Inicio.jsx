import UsersLayout from '@/Layouts/UsersLayout';
import { Head, router } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

export default function Inicio() {
    return (
        <UsersLayout>
            <Head title="Inicio" />
            <div className="grid grid-nogutter surface-0 text-800">
                <div className="col-12 md:col-6 py-6 px-0 lg:px-6  text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">🚧 Próximamente</span>
                        <div className="text-6xl text-primary font-bold mb-3">Compras por Madezon App</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
                        <Button label="Live Demo" type="button" className="p-button-outlined" />
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden mb-5 md:mb-6">
                    <img
                        src="/assets/img/hero-11.jpg"
                        alt="hero-1"
                        className="md:ml-auto block w-full h-auto md:h-full"
                        style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }}
                    />
                </div>
                <Divider />
                <section className='col-12 mt-4'>
                     <div className="flex justify-content-center mb-5">
                        <div className="p-4 flex flex-column w-12 md:w-9 lg:w-5 xl:w-4">
                            <img src="/assets/img/undraw_quote.svg" className='' alt="cotizar" />
                        </div>
                    </div>
                    <div className="surface-0 text-700 text-center">
                        <div className="text-900 font-bold text-5xl mb-3">¿Cuánto Cuesta Traerlo? Averígualo Aquí</div>
                        <div className="text-700 text-2xl mb-5">Cotiza el precio final de tu producto con envío, impuestos y todo incluido.</div>
                        <Button 
                            label="Obtener cotización" 
                            icon="pi pi-clipboard" 
                            className="font-bold px-6 py-4 p-button-rounded white-space-nowrap text-xl" 
                            raised
                            onClick={() => router.visit(route('cotizaciones.create'))}
                        />
                    </div>

                </section>
            </div>
        </UsersLayout>
    );
}
