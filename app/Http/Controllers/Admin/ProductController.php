<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Services\DataTableService;
use App\Services\ProductService;
use App\Models\Admin\Product;
use App\Models\Admin\ProductImage;
use App\Models\Admin\SubCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;


class ProductController extends Controller
{
    protected $dataTableService;

    public function __construct(protected ProductService $productService)
    {
        $this->dataTableService = new DataTableService(Product::class);
    }

    public function index(Request $request)
    {
        $request->merge(['relationships' => ['subCategory.category:id,name']]);
        $sub_categories = transformToLabelValue(SubCategory::select('id', 'name')->get());
        return Inertia::render('Admin/Products/ProductIndex', [
            'data' => $this->dataTableService->paginateRecordsList($request, []),
            'subCategories' => $sub_categories
        ]);
    }

    public function store(ProductRequest $request)
    {
        $this->productService->create($request->validated());
    }

    public function edit(Product $product)
    {
        $product->load('images');
        return response()->json(['item' => $product]);
    }

    public function update(ProductRequest $request, Product $product)
    {
        $this->productService->update($request->validated(), $product);
    }

    public function destroy(Product $product)
    {
        $product->delete();
    }

    public function removeImage(ProductImage $productImage)
    {
        return $this->productService->removeImage($productImage);
    }
}
