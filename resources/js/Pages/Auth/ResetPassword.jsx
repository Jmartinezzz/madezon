import ValidationError from '@/Components/ValidationError';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Reestablecer contraseña" />

            <form onSubmit={submit} className='text-900'>
                <div>
                    <label htmlFor="email">Correo</label>
                    <InputText
                        id="email"
                        type="email"
                        value={data.email}
                        className='w-full mt-2 shadow-1'
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <ValidationError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <label htmlFor="password">Contraseña</label>
                    <InputText
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className='w-full mt-2 shadow-1'
                        type='password'  tabIndex={2} 
                    />
                    <ValidationError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <label htmlFor="password_confirmation">Repita contraseña</label>
                     <InputText
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        className='w-full mt-2 shadow-1'
                        type='password'  tabIndex={2} 
                    />
                    <ValidationError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex align-items-center justify-content-end">
                    <Button disabled={processing}  label='Reestablecer contraseña'/>
                </div>
            </form>
        </GuestLayout>
    );
}
