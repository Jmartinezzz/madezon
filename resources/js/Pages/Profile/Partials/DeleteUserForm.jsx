import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';        
import { InputText } from 'primereact/inputtext';
import ValidationError from '@/Components/ValidationError';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        clearErrors();
        setConfirmingUserDeletion(false);
        reset();
    };

    return (
        <section className='mt-4'>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                   Borrar Cuenta
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <Button onClick={confirmUserDeletion} label='Eliminar Cuenta' severity='danger'/>
        
            <Dialog draggable={false} visible={confirmingUserDeletion} style={{ width: '50vw' }} onHide={closeModal}>
                <form onSubmit={deleteUser} className="px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                        ¿Estás seguro de eliminar tu cuenta?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </p>

                    <div className="mt-6">
                        <label htmlFor="password">Password</label>
                         <InputText
                            id="password"
                            value={data.password}
                            placeholder="Password"
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className='w-full mt-2 shadow-1'
                            type='password' 
                            tabIndex={1} 
                        />
                        <ValidationError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-5 flex justify-content-end gap-2">
                        <Button onClick={closeModal} label='Cancelar'/>
                        <Button disabled={processing} label='Borrar Cuenta' severity='danger'/>
                    </div>
                </form>
            </Dialog>
        </section>
    );
}
