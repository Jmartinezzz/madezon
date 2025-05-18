import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { LayoutContext } from './context/layoutcontext';
import {Link} from "@inertiajs/react";

const AppTopbar = forwardRef((props, ref) => {
    const { layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));


    return (
        <div className="layout-topbar">
            <Link href="/" className="layout-topbar-logo">
                <img src="logo.png"  height={'55px'} alt="logo" />
            </Link>

            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>


            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-user" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <Link href={route('profile.edit')} className="p-link layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Perfil</span>
                </Link>
                {/* <Link href={route('profile.settings')} className="p-link layout-topbar-button">
                    <i className="pi pi-cog"></i>
                    <span>Configuraciones</span>
                </Link> */}
                <Link href={route('logout')} method="post" as="button" className="p-link layout-topbar-button">
                    <i className="pi pi-lock"></i>
                    <span>Cerrar sesion</span>
                </Link>
            </div>
        </div>
    );
});

export default AppTopbar;
