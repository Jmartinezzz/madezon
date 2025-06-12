<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuoteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'type' => ['required'],
            'url' => ['required', 'url'],
            'paying_price' => ['required_if:type,1', 'nullable', 'decimal:2'],
            'weight' => ['nullable', 'decimal:2'],
            'quantity' => ['required', 'integer'],
            'category' => ['required'],
            'image' => ['nullable'],
            'notes' => ['nullable', 'max:250'],
            'name' => ['required'],
            'phone' => ['required'],         
            'email' => ['required'],         
        ];
    }

    public function attributes(): array
    {
        return [
            'type' => 'quien compra',
            'url' => 'enlace del producto',
            'name' => 'nombre',
            'phone' => 'teléfono',
            'email' => 'correo',
            'quantity' => 'cantidad',
            'paying_price' => 'precio',
            'weight' => 'peso aproximado',
            'category' => 'categoria',
            'image' => 'imagen',
        ];
    }
}
