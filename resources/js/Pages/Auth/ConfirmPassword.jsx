import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import ValidationError from '@/Components/ValidationError';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirmar contraseña" />

            <div className="mb-4 text-sm text-gray-600">
               Esta es un área segura de la aplicación. Por favor confirme su
                contraseña antes de continuar.
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <label htmlFor="password">Contraseña</label>
                    <InputText
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className='w-full mt-2 shadow-1'
                        type='password'
                    />

                    <ValidationError message={errors.password} className="mt-2" />
                    
                </div>

                <div className="mt-4 flex align-items-center justify-content-end">
                    <Button disabled={processing}>Confirmar</Button>
                </div>
            </form>
        </GuestLayout>
    );
}
