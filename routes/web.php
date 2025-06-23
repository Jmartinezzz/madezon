<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\QuoteController;
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
Route::get('/politicas-privacidad', [StoreController::class, 'policies'])->name('policies');
Route::get('/terminos-condiciones', [StoreController::class, 'conditions'])->name('conditions');
Route::get('/eliminacion-datos', [StoreController::class, 'destroyData'])->name('destroyData');
Route::get('/contacto', [StoreController::class, 'contact'])->name('contact');

Route::get('/productos/{product:slug}', [ProductController::class, 'show'])->name('products.show');

Route::resource('/cotizaciones', QuoteController::class)
    ->parameters(['cotizaciones' => 'quote'])
    ->only(['create', 'index', 'store']);

Route::middleware('auth')->group(function () {
    Route::get('/perfil', [ProfileController::class, 'edit'])->name('profile.edit');
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
