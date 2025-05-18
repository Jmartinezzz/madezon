import { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Divider } from 'primereact/divider';
import { useRef } from 'react';
import { Link, usePage } from '@inertiajs/react';
import NavbarMobile from '@/Components/Layout/NavbarMobile';
import { motion } from 'framer-motion';

export default function UsersLayout({ children }) {
    const user = usePage().props.auth.user;
    const menuRef = useRef(null);
    const [cartVisible, setCartVisible] = useState(false);

    const userMenu = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => (window.location.href = route('profile.edit')),
        },
        {
            label: 'Logout',
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
        return (
            <Link
                href={item.url}
                className={`px-3 py-2 text-white hover:text-700 transition-colors duration-200 ${options.className}`}
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
            template: itemTemplate,
        },
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            url: route('dashboard'),
            template: itemTemplate,
        },
        {
            label: 'Settings',
            icon: 'pi pi-cog',
            url: '/settings',
            template: itemTemplate,
        },
    ];

    const start = (
        <Link href="/" className="text-xl font-bold text-indigo-500 mr-6">
            Logo
        </Link>
    );

    const end = user ? (
        <div className="flex align-items-center gap-3">
            <div className="input-search-wrapper">
                <InputText placeholder="Encuentra lo que necesitas" type="text" className="w-full" />
            </div>
            <span className="text-sm text-white font-semibold hidden sm:block">
                {user.name}
            </span>
            <Avatar
                image={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
                shape="circle"
                className="cursor-pointer"
                onClick={(e) => menuRef.current.toggle(e)}
            />
            <Menu model={userMenu} popup ref={menuRef} />
            <i 
                className="pi pi-shopping-cart p-overlay-badge cursor-pointer" 
                style={{ fontSize: '1.8rem' }}
                onClick={() => setCartVisible(true)}    
            >
                <Badge value="10" severity="secondary"></Badge>
            </i>
        </div>
    ) : (
        <div className="flex align-items-center gap-3">
            <div className="input-search-wrapper">
                <InputText placeholder="Encuentra lo que necesitas" type="text" className="w-full" />
            </div>
            <Avatar
                image="assets/img/avatar-thumbnail.png"
                shape="circle"
                className="cursor-pointer"
                onClick={(e) => menuRef.current.toggle(e)}
            />
            <Menu model={guestMenu} popup ref={menuRef} />
        </div>
    );

    return (
        <>
            <div className='flex flex-column min-h-screen'>
                <div className="shadow-3 hidden md:block">
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
                <footer className="bg-primary text-white text-center py-4 mt-auto">
                    © {new Date().getFullYear()} <span className='font-semibold'>Madezon</span>. Todos los derechos reservados.
                </footer>
            </div>
        </>
    );
}
