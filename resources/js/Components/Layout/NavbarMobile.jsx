import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { useSelector } from 'react-redux';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';;
import { usePage } from '@inertiajs/react';
import { Sidebar } from 'primereact/sidebar';
import SidebarMobile from './SidebarMobileContent'
import CartContent from '../Store/CartContent'

export default function NavbarMobile({ items, cartVisible, setCartVisible }) {
    const user = usePage().props.auth.user;
    const [sidebarvisible, setSideVisible] = useState(false);
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        if (cartVisible) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [cartVisible]);


    return (
        <>
            {/* Botón de hamburguesa en móvil */}
            <div
                className="
                    lg:hidden
                    sticky
                    top-0
                    z-5
                    flex
                    justify-content-between
                    align-items-center
                    bg-primary
                    px-3
                    sm:px-5
                    py-3
                    "
            >
                <Button className="font-semibold" onClick={() => setSideVisible(true)} >
                    <i className="pi pi-bars p-overlay-badge" style={{ fontSize: '2rem' }}></i>
                </Button>
                {/* <div className='flex gap-3 align-items-center'> */}
                <div className="input-search-wrapper">
                    <InputText placeholder="Encuentra lo que necesitas" type="text" className="w-full" />
                </div>
                <div className='px-2 sm:px-0'>
                    <i
                        className="pi pi-shopping-cart p-overlay-badge cursor-pointer"
                        style={{ fontSize: '1.8rem' }}
                        onClick={() => setCartVisible(true)}
                    >
                        <Badge value={totalItems} severity="secondary"></Badge>
                    </i>
                </div>
            </div>
            {/* Sidebar (menú lateral) en móvil */}
            <Sidebar visible={sidebarvisible} onHide={() => setSideVisible(false)}>
                <SidebarMobile items={items} />
            </Sidebar>
            {/* Sidebar carrito */}
            <Sidebar visible={cartVisible} position="right" onHide={() => setCartVisible(false)}>
                <CartContent />
            </Sidebar>
        </>
    );
}
