import UsersLayout from '@/Layouts/UsersLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import { Divider } from 'primereact/divider';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
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
                        <UpdatePasswordForm />
                    </div>
                    <div className="">
                        {/* <DeleteUserForm /> */}
                    </div>
                </div>
            </div>
        </UsersLayout>
    );
}
