<?php

namespace App\Http\Controllers;

use App\Models\Admin\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoreController extends Controller
{
    public function index() 
    {    
        $products = Product::with('firstImage')->where('is_active', 1)->get();
        return Inertia::render('Tienda', [
            'products' => $products
        ]);
    }
}
