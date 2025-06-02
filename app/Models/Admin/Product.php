<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Product extends Model
{
    /** @use HasFactory<\Database\Factories\Admin\ProductFactory> */
    use HasFactory;

    protected $guarded = ['id'];
    protected $appends = ['first_image_url'];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function firstImage()
    {
        return $this->hasOne(ProductImage::class)->orderBy('id');
    }

    protected function firstImageUrl(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->firstImage
                ? $this->firstImage->image_url
                : '/assets/img/no-img-product.jpg'
        );
    }

    protected function name(): Attribute
    {
        return Attribute::make(
            set: fn(string $value) => ucfirst($value)
        );
    }
}
