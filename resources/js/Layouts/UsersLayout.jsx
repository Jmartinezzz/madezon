import { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Divider } from 'primereact/divider';
import { useRef } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import NavbarMobile from '@/Components/Layout/NavbarMobile';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { loadCart, migrateGuestCartToUserCart } from '@/store/cart/cartThunks';
import Footer from '@/Components/Layout/Footer';

export default function UsersLayout({ children }) {
    const { props: { auth: { user } }, url } = usePage();
    const [searchTerm, setSearchTerm] = useState(() => new URLSearchParams(window.location.search).get('search') || '');

    const menuRef = useRef(null);
    const dispatch = useDispatch();
    const [cartVisible, setCartVisible] = useState(false);
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const flag = localStorage.getItem('proceeded_to_checkout_as_guest');
        if (flag && user) {
            dispatch(migrateGuestCartToUserCart(user.id));
            localStorage.removeItem('proceeded_to_checkout_as_guest');
        }
        dispatch(loadCart(user?.id));
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            router.get(route('store', {search: searchTerm}))
        }
    };

    const userMenu = [
        {
            label: 'Perfil',
            icon: 'pi pi-user',
            command: () => (window.location.href = route('profile.edit')),
        },
        {
            label: 'Mis Pedidos',
            icon: 'pi pi-book',
            command: () => (window.location.href = route('profile.orders')),
        },
        {
            label: 'Mis Cotizaciones',
            icon: 'pi pi-amazon',
            command: () => (window.location.href = route('cotizaciones.create')),
        },
        {
            label: 'Salir',
            icon: 'pi pi-sign-out',
            command: () => {
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = route('logout');
                const csrf = document.querySelector('meta[name="csrf-token"]');
                if (csrf) {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = '_token';
                    input.value = csrf.content;
                    form.appendChild(input);
                }
                document.body.appendChild(form);
                form.submit();
            },
        },
    ];

    const guestMenu = [
        {
            label: 'Inicia Sesión',
            icon: 'pi pi-sign-in',
            command: () => (window.location.href = route('login')),
        },
        {
            label: 'Registrate',
            icon: 'pi pi-user-plus',
            command: () => (window.location.href = route('register')),
        },

    ];

    const itemTemplate = (item, options) => {
        const isActive = url.startsWith(item.staticUrl);

        return (
            <Link
                href={item.url}
                className={`
                    py-2
                    text-white hover:text-700 font-semibold
                    ${isActive
                        ? 'border-bottom-2 border-400'
                        : ''
                    }
                    ${options.className}`}
            >
                <div className='flex align-items-baseline gap-1'>
                    {item.icon && <i className={`${item.icon} text-base`} />}
                    <span>{item.label}</span>
                </div>
            </Link>
        );
    };

    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            url: route('home'),
            staticUrl: '/inicio',
            template: itemTemplate,
        },
        {
            label: 'Tienda',
            icon: 'pi pi-shop',
            url: route('store'),
            staticUrl: '/tienda',
            template: itemTemplate,
        },
    ];

    const start = (
        <Link href="/" className="text-xl font-bold text-indigo-500 mr-6">
            <img src="/assets/img/mdz1.webp" alt="" style={{ width: '3rem', height: '3rem' }} />
        </Link>
    );

    const avatar_img = user ? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}` : '/assets/img/avatar-thumbnail.png'
    const end = (
        <div className="flex align-items-center gap-3">
            <div className="input-search-wrapper">
                <InputText
                    value={searchTerm}
                    placeholder="Encuentra lo que necesitas"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border-round-md p-inputtext-lg"
                    onKeyDown={handleKeyDown}
                />
            </div>
            {user && (
                <span className="text-sm text-white font-semibold hidden sm:block">
                    {user.name}
                </span>
            )}
            <Avatar
                image={avatar_img}
                shape="circle"
                className="cursor-pointer"
                onClick={(e) => menuRef.current.toggle(e)}
            />

            <Menu
                model={user ? userMenu : guestMenu}
                popup
                ref={menuRef}
            />

            <i
                className="pi pi-shopping-cart p-overlay-badge cursor-pointer"
                style={{ fontSize: '1.8rem' }}
                onClick={() => setCartVisible(true)}
            >
                <Badge value={totalItems} severity="secondary"></Badge>
            </i>
        </div>
    )

    return (
        <>
            <div className='flex flex-column min-h-screen'>
                <div className="shadow-3 hidden lg:block">
                    <Menubar
                        model={items}
                        start={start}
                        end={end}
                        className="px-5 py-3"
                        pt={{
                            root: {
                                className: 'bg-primary'
                            },
                            menuitem: {
                                className: 'font-semibold'
                            },

                        }}
                    />
                </div>
                <NavbarMobile items={items} cartVisible={cartVisible} setCartVisible={setCartVisible} />
                <motion.div
                    className="surface-0 px-5"
                    key={window.location.pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                    <Divider className='mt-6 mb-4' />
                </motion.div>
                <Footer />
            </div>
        </>
    );
}
