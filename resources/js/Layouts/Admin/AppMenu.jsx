import React from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';

const AppMenu = () => {
    const model = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: route('admin.dashboard') }]
        },
        {
            label: 'Store',
            items: [
                {
                    label: 'Products and Categories',
                    icon: 'pi pi-shop',
                    items: [
                        { label: 'Products', icon: 'pi pi-fw pi-id-card', to: route('admin.products.index') },
                        { label: 'Categories', icon: 'pi pi-fw pi-bookmark-fill', to: route('admin.categories.index') },
                        { label: 'Sub Categories', icon: 'pi pi-fw pi-bookmark', to: route('admin.subcategories.index') },
                    ]
                },
                { label: 'Orders', icon: 'pi pi-fw pi-book', to: route('admin.orders.index') },
                { label: 'Quotes', icon: 'pi pi-fw pi-amazon', to: route('admin.quotes.index') },
            ],
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
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
