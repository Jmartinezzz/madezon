import { Head, Link, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Inicio de sesión" />

            <div className="flex h-screen">
                {/* Imagen y frase (lado izquierdo) */}
                <div
                    className="w-7 hidden md:flex flex-column justify-content-center align-items-center p-8"
                    style={{
                        backgroundImage: "url('/path-to-your-image.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold mb-4">“Simplemente todas las herramientas que mi equipo y yo necesitamos.”</h1>
                        <p className="text-lg mt-4 font-light">Karen Yue<br />Directora de Tecnología de Marketing</p>
                    </div>
                </div>

                {/* Formulario (lado derecho) */}
                <div className="w-full md:w-5 flex align-items-center justify-content-center p-6">
                    <div className="w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-2">Bienvenido de nuevo a Madezon</h2>
                        <p className="mb-4 text-gray-600">Ingresa tus credenciales para continuar.</p>

                        {status && (
                            <Message severity="success" text={status} className="mb-3" />
                        )}

                        <form onSubmit={submit} className="p-fluid">

                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="block mb-2 font-semibold">Correo electrónico</label>
                                <InputText
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className={`w-full ${errors.email ? 'p-invalid' : ''}`}
                                />
                                {errors.email && <Message severity="error" text={errors.email} className="mt-2" />}
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label htmlFor="password" className="block mb-2 font-semibold">Contraseña</label>
                                <Password
                                    id="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    toggleMask
                                    feedback={false}
                                    className={`w-full ${errors.password ? 'p-invalid' : ''}`}
                                />
                                {errors.password && <Message severity="error" text={errors.password} className="mt-2" />}
                            </div>

                            {/* Remember me + Forgot password */}
                            <div className="flex justify-content-between align-items-center mb-4">
                                <div className="flex align-items-center">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="mr-2"
                                    />
                                    <label htmlFor="remember" className="text-sm text-gray-700">Recordarme</label>
                                </div>

                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm underline text-primary hover:text-primary-700"
                                    >
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                )}
                            </div>

                            {/* Submit */}
                            <Button
                                label="Iniciar sesión"
                                icon="pi pi-sign-in"
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            />

                            {/* Opción de registro */}
                            <p className="mt-4 text-center text-sm">
                                ¿No tienes una cuenta?{' '}
                                <Link href={route('register')} className="text-primary underline">
                                    Regístrate
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
