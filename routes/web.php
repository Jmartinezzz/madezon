<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return Inertia::render('Inicio');
});

Route::get('/inicio', function () {
    return Inertia::render('Inicio');
})->name('home');

Route::get('/tienda', [StoreController::class, 'index'])->name('store');

Route::get('/productos/{product:slug}', [ProductController::class, 'show'])->name('products.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/checkout/webhook', [OrderController::class, 'handleWompiWebhook']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/checkout', [OrderController::class, 'checkoutIndex'])->name('checkout.index');
    Route::post('/checkout', [OrderController::class, 'checkout'])->name('checkout.store');
});

require __DIR__.'/auth.php';
