<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Order;
use App\Models\Quote;
use App\Models\Admin\Product;
use App\Models\Admin\Category;
use App\Models\Admin\SubCategory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class DashboardController extends Controller
{
    public function index()
    {
        $dashboardData = Cache::remember('dashboard_stats', 14400, function () {
            return [ "entities" => [
                [
                    "entity" => "Prodcuts",
                    'count' => Product::count(), 
                    "icon" => "pi-id-card",
                    "redirect" => route('admin.products.index'),
                ],
                [
                    "entity" => "Categories",
                    'count' => Category::count(), 
                    "icon" => "pi-bookmark-fill",
                    "redirect" => route('admin.categories.index'),
                ],
                [
                    "entity" => "Sub Categories",
                    'count' => SubCategory::count(), 
                    "icon" => "pi-bookmark",
                    "redirect" => route('admin.subcategories.index'),
                ],
                [
                    "entity" => "Orders",
                    'count' => Order::count(), 
                    "icon" => "pi-book",
                    "redirect" => route('admin.orders.index'),
                ],
                [   "entity" => "Quotes",
                    'count' => Quote::count(), 
                    "icon" => "pi-amazon",
                    "redirect" => route('admin.quotes.index'),
                ]
            ]];
        });
        return Inertia::render('Admin/Dashboard', $dashboardData);
    }
}
