<?php

use Inertia\Inertia;
use App\Models\Admin\ProductImage;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductController;

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Admin/Dashboard'))->name('dashboard');
    Route::get('/test', fn() => ProductImage::all());
    Route::resource('/products', ProductController::class);
});
