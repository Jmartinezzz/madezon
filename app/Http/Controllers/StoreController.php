<?php

namespace App\Http\Controllers;

use App\Models\Admin\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoreController extends Controller
{
    public function index(Request $request) 
    {
        $search = $request->search;
        $products = Product::with(['firstImage', 'subcategory:id,name,category_id', 'subcategory.category:id,name'])
            ->withSearch($search)
            ->where('is_active', 1)
            ->get();
        return Inertia::render('Tienda', [
            'products' => $products,
        ]);
    }

    public function policies()
    {
        return Inertia::render('Policies');
    }

    public function conditions()
    {
        return Inertia::render('Conditions');
    }

    public function destroyData()
    {
        return Inertia::render('DestroyData');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }
}
