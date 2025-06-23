<?php

use Inertia\Inertia;
use App\Models\Admin\ProductImage;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\QuoteController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\SubCategoryController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/products/{product}', [ProductController::class, 'update'])->name('products.update');
    Route::post('/products/remove-image/{productImage}', [ProductController::class, 'removeImage'])->name('products.removeImage');
    Route::resource('/products', ProductController::class)
        ->except(['update']);
    Route::resource('/categories', CategoryController::class)->except(['show']);
    Route::resource('/subcategories', SubCategoryController::class)->except(['show']);
    Route::resource('/quotes', QuoteController::class)
        ->except(['store', 'create']);
    Route::resource('/orders', OrderController::class)
        ->except(['store', 'create','destroy']);
});
