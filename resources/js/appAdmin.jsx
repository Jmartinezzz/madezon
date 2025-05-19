import './bootstrap';

import "primereact/resources/themes/soho-light/theme.css";
import 'normalize.css';
import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';
import "primeicons/primeicons.css";

import '../css/admin-layout.css'

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { LayoutProvider } from "@/Layouts/Admin/context/layoutcontext.jsx";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const adminPages = import.meta.glob('./Pages/Admin/**/*.jsx');
const userPages = import.meta.glob('./Pages/**/*.jsx');

createInertiaApp({
    title: (title) => `${title} - ${appName} Admin`,
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.jsx`, {...adminPages, ...userPages}),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <PrimeReactProvider>
                <LayoutProvider>
                    <App {...props} />
                </LayoutProvider>
            </PrimeReactProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

