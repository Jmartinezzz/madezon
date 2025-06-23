<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Admin\SubCategory;
use App\Services\DataTableService;
use App\Http\Controllers\Controller;
use App\Models\Admin\Category;

class SubCategoryController extends Controller
{
    protected $dataTableService;

    public function __construct()
    {
        $this->dataTableService = new DataTableService(SubCategory::class);
    }

    public function index(Request $request)
    {
        $request->merge(['relationships' => ['category']]);
        $categories = transformToLabelValue(Category::select('id', 'name')->get());
        return Inertia::render('Admin/Subcategories/SubcategoryIndex', [
            'data' => $this->dataTableService->paginateRecordsList($request, []),
            'categories' => $categories
        ]);
    }

     public function Store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'unique:categories,name'],
            'category_id' => ['required'],
        ]);
        SubCategory::create($validatedData);
    }

    public function edit(SubCategory $subcategory)
    {
        return response()->json(['item' => $subcategory]);
    }

    public function update(Request $request, subcategory $subcategory)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'unique:sub_categories,name,' . $subcategory->id],
            'category_id' => ['required'],
        ]);
        $subcategory->update($validatedData);
    }

    public function destroy(subcategory $subcategory)
    {
        $subcategory->delete();
    }
}
