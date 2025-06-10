import { router } from '@inertiajs/react';
import { Button } from 'primereact/button';

export default function SocialButtons({ className, processing }) {

    return (
        <div className={className}>
            <Button
                type="button"
                severity='info'
                className="flex align-items-start justify-content-center gap-2 font-semibold"
                raised
                text
                disabled={processing}
                onClick={() => router.get(route('facebook.auth.redirect', { network_driver: 'facebook' }))}
            >
                <i className='pi pi-facebook'></i>
                Facebook
            </Button>
            <Button
                type="button"
                severity='danger'
                className="flex align-items-start justify-content-center gap-2 font-semibold"
                raised
                text
                disabled={processing}
                onClick={() => router.get(route('google.auth.redirect', { network_driver: 'google' }))}
            >
                <i className='pi pi-google'></i>
                Google
            </Button>
        </div>
    );
}
