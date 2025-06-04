<?php

use Inertia\Inertia;
use App\Models\Admin\ProductImage;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductController;

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Admin/Dashboard'))->name('dashboard');
    Route::post('/products/{product}', [ProductController::class, 'update'])->name('products.update');
    Route::post('/products/remove-image/{productImage}', [ProductController::class, 'removeImage'])->name('products.removeImage');
    Route::resource('/products', ProductController::class)
        ->except(['update']);
});
