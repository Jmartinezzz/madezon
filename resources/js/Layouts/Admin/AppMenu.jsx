import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';
import { usePage } from '@inertiajs/react';

const AppMenu = () => {
    const model = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: route('admin.dashboard') }]
        },
        {
            label: 'Store',
            items: [{ label: 'Products', icon: 'pi pi-fw pi-id-card', to: route('admin.products.index') }]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) =>
                    !item?.separator ? (
                        <AppMenuitem item={item} root={true} index={i} key={item.label} />
                    ) : (
                        <li className="menu-separator" key={`separator-${i}`}></li>
                    )
                )}

                <a
                    href="https://blocks.primereact.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: 'pointer' }}
                >
                    <img
                        className="w-full mt-3"
                        src="/layout/images/banner-primeblocks/dark.png"
                    />
                </a>
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
