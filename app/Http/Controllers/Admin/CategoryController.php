<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Admin\Category;
use App\Services\DataTableService;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    protected $dataTableService;

    public function __construct()
    {
        $this->dataTableService = new DataTableService(Category::class);
    }

    public function index(Request $request)
    {
        return Inertia::render('Admin/Categories/CategoryIndex', [
            'data' => $this->dataTableService->paginateRecordsList($request, []),
        ]);
    }

    public function Store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'unique:categories,name'],
        ]);
        Category::create($validatedData);
    }

    public function edit(Category $category)
    {
        return response()->json(['item' => $category]);
    }

    public function update(Request $request, Category $category)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'unique:categories,name,' . $category->id],
        ]);
        $category->update($validatedData);
    }

    public function destroy(Category $category)
    {
        $category->delete();
    }
}
