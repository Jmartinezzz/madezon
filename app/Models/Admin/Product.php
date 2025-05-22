<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\Admin\ProductFactory> */
    use HasFactory;

    protected $guarded = ['id'];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }
    
}
