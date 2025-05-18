import { Head, Link, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register" />
            <div className="flex h-screen">
                {/* Left side image and text */}
                <div
                    className="w-7 hidden md:flex flex-column justify-content-center align-items-center p-8 text-white"
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

                {/* Right side form */}
                <div className="w-full md:w-5 flex align-items-center justify-content-center p-6">
                    <div className="w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-2">Crea tu cuenta en Madezon</h2>
                        <p className="mb-4 text-gray-600">Regístrate para comenzar a construir tu sistema de diseño.</p>

                        <form onSubmit={submit} className="p-fluid">

                            {/* Name Field */}
                            <div className="mb-3">
                                <label htmlFor="name" className="block mb-2 font-semibold">Nombre</label>
                                <InputText
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    autoFocus
                                    className={`w-full ${errors.name ? 'p-invalid' : ''}`}
                                />
                                {errors.name && <Message severity="error" text={errors.name} className="mt-2" />}
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label htmlFor="email" className="block mb-2 font-semibold">Correo electrónico</label>
                                <InputText
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    className={`w-full ${errors.email ? 'p-invalid' : ''}`}
                                />
                                {errors.email && <Message severity="error" text={errors.email} className="mt-2" />}
                            </div>

                            {/* Password Field */}
                            <div className="mb-3">
                                <label htmlFor="password" className="block mb-2 font-semibold">Contraseña</label>
                                <Password
                                    id="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    toggleMask
                                    feedback={false}
                                    required
                                    className={`w-full ${errors.password ? 'p-invalid' : ''}`}
                                />
                                {errors.password && <Message severity="error" text={errors.password} className="mt-2" />}
                            </div>

                            {/* Confirm Password Field */}
                            <div className="mb-3">
                                <label htmlFor="password_confirmation" className="block mb-2 font-semibold">Confirmar contraseña</label>
                                <Password
                                    id="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    toggleMask
                                    feedback={false}
                                    required
                                    className={`w-full ${errors.password_confirmation ? 'p-invalid' : ''}`}
                                />
                                {errors.password_confirmation && (
                                    <Message severity="error" text={errors.password_confirmation} className="mt-2" />
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-column align-items-center gap-3 mt-4">
                                <Button label="Registrarse" icon="pi pi-user-plus" type="submit" disabled={processing} />
                                <Link
                                    href={route('login')}
                                    className="text-sm underline text-primary hover:text-primary-700"
                                >
                                    ¿Ya tienes cuenta?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
