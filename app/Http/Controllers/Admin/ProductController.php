<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Services\DataTableService;
use App\Services\ProductService;
use App\Models\Admin\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{   
    protected $dataTableService;

    public function __construct(protected ProductService $productService)
    {
        $this->dataTableService = new DataTableService(Product::class);
    }

    public function index(Request $request)
    {
        return Inertia::render('Admin/Products/ProductIndex', [
            'data' => $this->dataTableService->paginateRecordsList($request, []),
        ]);
    }

    public function store(ProductRequest $request)
    {
       $this->productService->create($request->validated());
    }

    public function edit(Product $product)
    {
        return response()->json(['item' => $product]);
    }

    public function update(ProductRequest $request, Product $product)
    {
        $product->update($request->validated());
    }

    public function destroy(Product $product)
    {
        $product->delete();
    }
}
