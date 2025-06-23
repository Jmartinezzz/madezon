import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex flex-column align-items-center bg-primary sm:justify-content-center">
            <div className='mt-2'>
                <Link href="/">
                    <img src="/assets/img/mdz1.webp" height="75px" alt="Application_logo" />
                </Link>
            </div>

            <div className="mt-1 w-12 overflow-hidden bg-white px-6 py-3">
                {children}
            </div>
        </div>
    );
}
