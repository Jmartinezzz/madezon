import 'primereact/resources/themes/saga-green/theme.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/themes/mdc-light-indigo/theme.css';
// import 'primereact/resources/themes/md-light-deeppurple/theme.css';
import 'normalize.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { ToastProvider } from './Context/ToastContext';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';    

const appName = import.meta.env.VITE_APP_NAME || 'Madezon';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <PrimeReactProvider value={{ ripple: true }}>
                <Provider store={store}>
                    <ToastProvider>
                        <App {...props} />
                    </ToastProvider>
                </Provider>
            </PrimeReactProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

