<?php

namespace App\Http\Requests\Admin;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
        // dd(request());
        return [
            "sub_category_id" => ['nullable'],
            "name" => ['required'],
            "description" => ['required'],
            "short_description" => ['required'],
            "slug" => ['nullable', Rule::unique('products')->ignore($this->product)],
            "price" => ['required'],
            "promo_price" => ['nullable'],
            "stock" => ['nullable'],
            "is_active" => ['nullable'],
            'images' => ['nullable', 'array'],
            'images.*' => ['image', 'mimes:jpeg,png', 'max:3000'],
        ];
    }

    protected function prepareForValidation()
    {
        if ($this->is_active === null) {
            $this->merge([
                'is_active' => false,
            ]);
        }
        if ($this->stock === null) {
            $this->merge([
                'stock' => 0,
            ]);
        }
    }
}
