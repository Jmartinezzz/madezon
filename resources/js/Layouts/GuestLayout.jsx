import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex flex-column align-items-center bg-primary sm:justify-content-center">
            <div>
                <Link href="/">
                    <img src="images/logo/logo.png" alt="Application_logo" />
                </Link>
            </div>

            <div className="mt-7 w-12 overflow-hidden bg-white px-6 py-4 shadow-5 border-round-md">
                {children}
            </div>
        </div>
    );
}
