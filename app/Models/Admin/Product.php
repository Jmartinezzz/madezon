<?php

namespace App\Models\Admin;

use App\Traits\ClearDashboardCache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\Admin\ProductFactory> */
    use HasFactory, ClearDashboardCache;

    protected $guarded = ['id'];
    protected $appends = ['first_image_url'];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function subCategory(): BelongsTo
    {
        return $this->BelongsTo(SubCategory::class);
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

    /**
     * Scope a query with user search
     */
    public function scopeWithSearch(Builder $query, $search): void
    {
        $query->when(
            $search,
            fn($q, $search) =>
            $q->where(function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhereRelation('subcategory', 'name', 'like', "%{$search}%")
                    ->orWhereRelation('subcategory.category', 'name', 'like', "%{$search}%");
            })
        );
    }
}
