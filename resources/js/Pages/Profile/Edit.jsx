import UsersLayout from '@/Layouts/UsersLayout';
import { usePage } from '@inertiajs/react'
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import { Divider } from 'primereact/divider';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    const user = usePage().props.auth.user;
    console.log(user);
    
    return (
        <UsersLayout>
            <Head title="Perfil" />
            <div className="mt-5">
                <div className="sm:px-6 lg:px-8">
                    <div className="">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </div>
                    <Divider />
                    <div className="">
                        {!user.has_social_login && <UpdatePasswordForm />}
                    </div>
                    <div className="">
                        {/* <DeleteUserForm /> */}
                    </div>
                </div>
            </div>
        </UsersLayout>
    );
}
