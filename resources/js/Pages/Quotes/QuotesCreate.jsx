import UsersLayout from '@/Layouts/UsersLayout';
import { useRef } from 'react';
import { Head, usePage } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
import { useForm } from '@inertiajs/react';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import ValidationError from '@/Components/ValidationError';
import { useToast } from '@/Context/ToastContext';

export default function QuotesCreate({ }) {
    const user = usePage().props?.auth.user
    const { showToast } = useToast();
    const fileInputRef = useRef();
    const { data, setData, post, errors, processing, clearErrors, reset } = useForm(
        {
            type: null,
            url: '',
            name: user?.name,
            phone: '',
            email: user?.email,
            paying_price: '',
            weight: '',
            quantity: '',
            category: '',
            image: null,
            notes: '',
        })

    const extractAmazonUrl = (input) => {
        const regex = /(https?:\/\/(?:www\.)?(?:amazon\.com|a\.co)\/[^\s]+)/i;
        const match = input.match(regex);
        return match ? match[0] : "";
    }

    const handleChange = (e) => {
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('cotizaciones.store'), {
            onSuccess: () => {
                showToast('success', 'Success', 'Cotización enviada', 4000);
                reset()
                fileInputRef.current.value = null;
            },
        })

    };

    return (
        <UsersLayout>
            <Head title="cotizaciones" />

            <div className="mt-5">
                <div className="surface-0 text-700 text-center">
                    <div className="text-900 font-bold text-4xl mb-3">¡Cotiza tu producto!</div>
                    <div className="text-700 text-xl mb-5">
                        Solicita una cotización personalizada sin compromiso y descubre nuestras mejores ofertas.
                    </div>
                </div>
                <div className="flex justify-content-center mt-5">
                    <div className="w-12 md:w-6 text-lg">
                        <form onSubmit={handleSubmit} className="mt-3">
                            <section className='mb-5'>
                                <FloatLabel>
                                    <Dropdown
                                        id='type'
                                        value={data.type}
                                        onChange={(e) => setData('type', e.value)}
                                        options={[
                                            { name: 'Yo lo compraré', value: 1 },
                                            { name: 'Necesito que me lo compren', value: 2 },
                                        ]}
                                        optionLabel="name"
                                        placeholder="Selecciona una opción"
                                        className="w-full border-primary border-2 text-black-alpha-90"
                                    />
                                    <label htmlFor="type">¿Quién compra el producto?</label>
                                </FloatLabel>
                                <ValidationError message={errors['type']} />
                            </section>
                            {data.type != null && (
                                <>
                                    <section className='mb-5'>
                                        <FloatLabel>
                                            <InputText
                                                id="url"
                                                className='w-12 border-primary border-2 text-black-alpha-90 text-black-alpha-90'
                                                value={data.url}
                                                onChange={(e) => setData('url', e.target.value)}
                                            />
                                            <label htmlFor="url">Enlace del producto</label>
                                        </FloatLabel>
                                        <ValidationError message={errors['url']} />
                                    </section>
                                    {data.type == 1 && (
                                        <section className='mb-5'>
                                            <FloatLabel>
                                                <InputText
                                                    id="paying_price"
                                                    type='number'
                                                    step={0.01}
                                                    min={1}
                                                    className='w-12 border-primary border-2 text-black-alpha-90 text-black-alpha-90'
                                                    value={data.paying_price}
                                                    onChange={(e) => setData('paying_price', e.target.value)}
                                                    onBlur={(e) => {
                                                        const value = parseFloat(e.target.value);
                                                        if (!isNaN(value)) {
                                                            setData('paying_price', value.toFixed(2));
                                                        }
                                                    }}
                                                />
                                                <label htmlFor="paying_price">Precio pagado</label>
                                            </FloatLabel>
                                            <ValidationError message={errors['paying_price']} />
                                        </section>
                                    )}
                                    <section className='mb-5'>
                                        <FloatLabel>
                                            <InputText
                                                id="weight"
                                                type="number"
                                                min={1}
                                                step={0.01}
                                                className='w-12 border-primary border-2 text-black-alpha-90'
                                                value={data.weight}
                                                onChange={(e) => setData('weight', e.target.value)}
                                            />
                                            <label htmlFor="weight">Peso aproximado (si se conoce)</label>
                                        </FloatLabel>
                                        <ValidationError message={errors['weight']} />
                                    </section>
                                    <section className='mb-5'>
                                        <FloatLabel>
                                            <InputText
                                                type="number"
                                                min={0}
                                                id="quantity"
                                                className='w-12 border-primary border-2 text-black-alpha-90'
                                                value={data.quantity}
                                                onChange={(e) => setData('quantity', e.target.value)}
                                            />
                                            <label htmlFor="quantity">Cantidad</label>
                                        </FloatLabel>
                                        <ValidationError message={errors['quantity']} />
                                    </section>
                                    <section className='mb-5'>
                                        <FloatLabel>
                                            <Dropdown
                                                id='category'
                                                value={data.category}
                                                onChange={(e) => setData('category', e.value)}
                                                options={[
                                                    { name: 'Electrónica', value: 'electronica' },
                                                    { name: 'Ropa', value: 'ropa' },
                                                    { name: 'Accesorios', value: 'accesorios' },
                                                    { name: 'Otros', value: 'otros' },
                                                ]}
                                                optionLabel="name"
                                                className="w-full border-primary border-2 text-black-alpha-90"
                                            />
                                            <label htmlFor="category">Categoría del producto</label>
                                        </FloatLabel>
                                        <ValidationError message={errors['category']} />
                                    </section>
                                    <section className='mb-5'>
                                        <label className='text-700' htmlFor="name">Imagen del producto (opcional):</label>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            onChange={(e) => setData('image', e.target.files[0])}
                                            className='w-12 border-primary border-2 text-black-alpha-90 py-2 px-2'
                                        />
                                    </section>
                                    <section className='mb-5'>
                                        <FloatLabel>
                                            <InputTextarea
                                                id="notes"
                                                value={data.notes}
                                                onChange={(e) => setData('notes', e.target.value)}
                                                className='w-12 border-primary border-2 text-black-alpha-90'
                                                rows={5} cols={30}
                                            />
                                            <label htmlFor="name">Notas Adicionales</label>
                                        </FloatLabel>
                                    </section>
                                    <section className='mb-5'>
                                        <FloatLabel>
                                            <InputText
                                                id="name"
                                                className='w-12 border-primary border-2 text-black-alpha-90'
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                            <label htmlFor="name">Nombre</label>
                                        </FloatLabel>
                                        <ValidationError message={errors['name']} />
                                    </section>
                                    <section className='mb-5'>
                                        <FloatLabel>
                                            <InputText
                                                id="phone"
                                                className='w-12 border-primary border-2 text-black-alpha-90'
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                            />
                                            <label htmlFor="phone">Teléfono</label>
                                        </FloatLabel>
                                        <ValidationError message={errors['phone']} />
                                    </section>
                                    <section className='mb-5'>
                                        <FloatLabel>
                                            <InputText
                                                id="email"
                                                className='w-12 border-primary border-2 text-black-alpha-90'
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                            <label htmlFor="email">Correo Electrónico</label>
                                        </FloatLabel>
                                        <ValidationError message={errors['email']} />
                                    </section>
                                    <span className='text-600 text-base'>También nos puedes consultar sobre tu producto en
                                        <a className='no-underline' href="https://api.whatsapp.com/send?phone=+50362054809&text=Hola, me gustaría hacer una cotización"> WhatsApp</a>
                                    </span>
                                    <section className='flex justify-content-end mt-3'>
                                        <Button label='Cotizar' raised loading={processing} />
                                    </section>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </UsersLayout>
    );
}
