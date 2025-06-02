<?php

namespace App\Services;

use Illuminate\Support\Str;
use App\Models\Admin\Product;
use App\Models\Admin\ProductImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class ProductService
{
    public function create(array $attributes)
    {
        $attributes['slug'] = Str::slug($attributes['name'] . time());
        $product = Product::create($attributes);
        $this->createImages($product, $attributes['images']);
    }

    public function update(array $attributes, Product $product)
    {
        $product->update($attributes);
        $this->createImages($product, $attributes['images']);
    }

    public function delete(array $attributes, Product $product)
    {
        // todo here
    }

    public function removeImage(ProductImage $productImage)
    {
        $path = $productImage->getRawOriginal('image_url');
        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
            $productImage->delete();
            return response()->noContent();
        }
        return response()->json(['error' => "Error deleting image"], 500);
    }

    public function createImages(Product $product, array $images)
    {
        $folderName = $product->slug;
        if (!empty($images) && is_array($images)) {
            foreach ($images as $image) {
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
