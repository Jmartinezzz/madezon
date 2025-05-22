<?php

namespace App\Services;

use Illuminate\Support\Str;
use App\Models\Admin\Product;

class ProductService
{
    public function create(array $attributes)
    {
        $product = Product::create($attributes);
        $folderName = Str::slug($product->name);
        if (!empty($attributes['images']) && is_array($attributes['images'])) {
            foreach ($attributes['images'] as $image) {
                if ($image->isValid()) {
                    $randomName = Str::random(8) . "_" . time() . '.' . $image->getClientOriginalExtension();
                    $image->storeAs("products/{$folderName}", $randomName, 'public');

                    $product->images()->create([
                        'image_url' => "products/{$folderName}/{$randomName}",
                    ]);
                }
            }
        }
    }
}
