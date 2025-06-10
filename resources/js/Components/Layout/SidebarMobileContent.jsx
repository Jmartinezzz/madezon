import { useState } from 'react';
import { router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';


export default function SidebarMobileContent({ items }) {
    const { props: { auth: { user } }, url } = usePage();

    return (
        <>
            <h1 className='mt-0'>Logo</h1>
            <Divider />
            <ul className="list-none m-0 p-0">
                {items.map((item, idx) => (
                    <li key={idx} className={`mb-2 ${url.startsWith(item.staticUrl) ? 'surface-200' : ''}`}>
                        <Button className="flex align-items-baseline font-bold text-lg" label={item.label} icon={item.icon} text onClick={() => router.visit(item.url)} />
                    </li>
                ))}
            </ul>
            <Divider className="mt-8" />
            {user ? (
                <>
                <div className='flex align-items-center gap-2 pb-3'>
                    <Avatar
                        image={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
                        shape="circle"
                    />
                    <span className="text-base text-primary font-semibold block">
                        {user.name}
                    </span>
                </div>
                 <ul className="list-none m-0 p-0">
                    <li className={url.startsWith('/ordenes') ? 'surface-200' : ''}>
                        <Button className="flex align-items-baseline font-semibold text-lg" label="Mis Pedidos" icon="pi pi-book" text onClick={() => router.visit(route('profile.orders'))} />
                    </li>
                    <li>
                        <Button className="flex align-items-baseline font-bold text-lg" label="Cerrar sesión" icon="pi pi-sign-out" text onClick={() => router.post(route('logout'))} />
                    </li>
                </ul>
                </>
            ) : (
                <ul className="list-none m-0 p-0">
                    <li>
                        <Button className="flex align-items-baseline" label="Inicia Sesión" icon="pi pi-sign-in" text onClick={() => router.visit(route('login'))} />
                    </li>
                    <li>
                        <Button className="flex align-items-baseline" label="Registrate" icon="pi pi-user-plus" text onClick={() => router.visit(route('register'))} />
                    </li>
                </ul>
            )}

        </>
    );
}
