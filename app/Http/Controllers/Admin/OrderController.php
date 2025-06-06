<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Models\Admin\Product;
use App\Services\ProductService;
use App\Services\DataTableService;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;

class OrderController extends Controller
{
    protected $dataTableService;

    public function __construct(protected ProductService $productService)
    {
        $this->dataTableService = new DataTableService(Order::class);
    }

    public function index(Request $request)
    {
        $request->merge(['relationships' => ['user']]);
        return Inertia::render('Admin/Orders/OrderIndex', [
            'data' => $this->dataTableService->paginateRecordsList($request, []),
        ]);
    }

    public function edit(Order $order)
    {
        return response()->json(['item' => $order]);
    }

    public function update(Request $request, Order $order)
    {
        $order->update($request->only('status'));
    }
    
}
