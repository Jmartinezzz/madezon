<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;

Route::post('/checkout/webhook', [OrderController::class, 'handleWompiWebhook']);
Route::get('/testapi', function() {
    return response()->json(555);
});
