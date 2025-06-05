import ValidationError from '@/Components/ValidationError';
import { Button } from 'primereact/button';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';

export default function UpdatePasswordForm() {
    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                }

                if (errors.current_password) {
                    reset('current_password');
                }
            },
        });
    };

    return (
        <section className='mt-4'>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Actualizar contraseña
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Asegúrese de que su cuenta esté utilizando una contraseña larga y aleatoria para mantenerse segura.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-3">
                <div>
                    <label className='text-800' htmlFor="current_password">Contraseña Actual</label>
                    <InputText
                        id="current_password"
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        className='w-full mt-2 shadow-1'
                        type='password' 
                        tabIndex={1} 
                    />
                    <ValidationError message={errors.current_password} className="mt-2" />
                </div>

                <div className='mt-3'>
                    <label className='text-800' htmlFor="password">Nueva Contraseña</label>
                    <InputText
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className='w-full mt-2 shadow-1'
                        type='password'  tabIndex={2} 
                    />
                    <ValidationError message={errors.password} className="mt-2" />
                </div>

                <div className='mt-3'>
                    <label className='text-800' htmlFor="password_confirmation">Confirmar Contraseña</label>
                    <InputText
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        autoComplete="new-password"
                        className='w-full mt-2 shadow-1'
                        type='password'  tabIndex={3}
                    />
                    <ValidationError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex align-items-center gap-4 mt-3">
                    <Button disabled={processing}>Guardar</Button>

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
