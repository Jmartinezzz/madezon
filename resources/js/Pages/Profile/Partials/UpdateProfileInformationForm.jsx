import ValidationError from '@/Components/ValidationError';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();
        if (!user.has_social_login) {
            patch(route('profile.update'));
        }
    };

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Información de perfil
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Actualice la información del perfil de su cuenta y la dirección de correo electrónico.
                </p>
            </header>

            <form onSubmit={submit} className="mt-3">
                <div>
                    <label className='text-800' htmlFor="name">Nombre</label>
                    <InputText
                        id="name"
                        value={data.name}
                        onChange={(e) =>
                            setData('name', e.target.value)
                        }
                        required
                        className='w-full mt-2 shadow-1'
                        tabIndex={1}
                        disabled={user.has_social_login}
                    />
                    <ValidationError message={errors.name} className="mt-2" />
                </div>

                <div className='mt-3'>
                    <label className='text-800' htmlFor="email">Correo Electrónico</label>
                    <InputText
                        id="email"
                        value={data.email}
                        onChange={(e) =>
                            setData('email', e.target.value)
                        }
                        required
                        className='w-full mt-2 shadow-1'
                        autoComplete="username"
                        tabIndex={2}
                        disabled={user.has_social_login}
                    />
                    <ValidationError message={errors.email} className="mt-2" />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Haga clic aquí para volver a enviar el correo electrónico de verificación.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                Un nuevo enlace de verificación ha sido enviado a tu dirección de correo.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4 mt-3">
                    <Button disabled={processing || user.has_social_login}>Guardar</Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Guardado.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
