import { useState, useEffect } from 'react';
import { Divider } from 'primereact/divider';
import { Link } from '@inertiajs/react';
export default function Footer() {

    return (
        <footer className="bg-primary text-white text-center py-4 mt-auto">
            <section className='flex flex-column md:flex-row justify-content-center md:justify-content-between px-5 md:px-7'>
                <div className="">
                    <img src="/assets/img/mdzbag.webp" height="150px"  alt="madezon logo" />
                </div>
                <div className="flex justify-content-center mt-2 gap-6 md:gap-8 align-items-baseline">
                    <div className="flex flex-column gap-2">
                        <span className='font-semibold'>Nosotros</span>
                        <Link className='text-sm no-underline text-300 font-bold' href={route('contact')}>Contáctanos</Link>
                    </div>
                    <div className="flex flex-column gap-2">
                        <span className='font-semibold'>Enlaces Útiles</span>
                        <Link className='text-sm no-underline text-300 font-bold' href={route('policies')}>Políticas y privacidad</Link>
                        <Link className='text-sm no-underline text-300 font-bold' href={route('conditions')}>Términos y condiciones</Link>
                        <Link className='text-sm no-underline text-300 font-bold' href={route('destroyData')}>Eliminación de datos</Link>
                    </div>
                </div>
            </section>
            <Divider />
            <div className='mt-4'>
                <span>© {new Date().getFullYear()} <span className='font-semibold'>Madezon</span>. Todos los derechos reservados.</span>
            </div>
        </footer>
    );
}
