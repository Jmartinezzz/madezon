<?php

namespace App\Http\Controllers;

use App\Models\Admin\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function show(Product $product) 
    {
        $product->load('images');
        return Inertia::render('Products/ProductsShow', [
            'product' => $product
        ]);
    }
}
