import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import ValidationError from '@/Components/ValidationError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                ¿Olvidaste tu contraseña? Ningún problema. Solo háganos saber su correo electrónico
                dirección y le enviaremos un correo electrónico a un enlace de restablecimiento de contraseña que
                Permitirle elegir uno nuevo.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                 <InputText
                    id="email"
                    type='email'
                    value={data.email}
                    onChange={(e) =>
                        setData('email', e.target.value)
                    }
                    required
                    className='w-full mt-2 shadow-1'
                    tabIndex={1}
                />

                <ValidationError message={errors.email} className="mt-2" />

                <div className="mt-4 flex align-items-center justify-content-end">
                    <Button disabled={processing}>Enviar enlace de reestablecimiento</Button>
                </div>
            </form>
        </GuestLayout>
    );
}
