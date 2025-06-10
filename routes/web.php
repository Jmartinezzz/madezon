<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialiteController;

Route::get('/', function () {
    return Inertia::render('Inicio');
});

Route::get('/inicio', function () {
    return Inertia::render('Inicio');
})->name('home');

Route::get('/tienda', [StoreController::class, 'index'])->name('store');

Route::get('/productos/{product:slug}', [ProductController::class, 'show'])->name('products.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/ordenes', [ProfileController::class, 'orders'])->name('profile.orders');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/checkout', [OrderController::class, 'checkoutIndex'])->name('checkout.index');
    Route::post('/checkout', [OrderController::class, 'checkout'])->name('checkout.store');
});

// socialite
Route::prefix('facebook')->name('facebook.')->group(function(){
    Route::get('/auth/redirect/{network_driver}', [SocialiteController::class, 'redirect'])->name('auth.redirect');
    Route::get('/auth/callback', [SocialiteController::class, 'facebookCallback'])->name('auth.callback');
});
Route::prefix('google')->name('google.')->group(function(){
    Route::get('/auth/redirect/{network_driver}', [SocialiteController::class, 'redirect'])->name('auth.redirect');
    Route::get('/auth/callback', [SocialiteController::class, 'googleCallback'])->name('auth.callback');
});
 

require __DIR__.'/auth.php';
