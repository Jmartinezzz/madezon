<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Services\DataTableService;
use App\Services\QuoteService;
use App\Models\Quote;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuoteController extends Controller
{
    protected $dataTableService;

    public function __construct(protected QuoteService $quoteService)
    {
        $this->dataTableService = new DataTableService(Quote::class);
    }

    public function index(Request $request)
    {
        $request->merge(['relationships' => ['user']]);
        return Inertia::render('Admin/Quotes/QuoteIndex', [
            'data' => $this->dataTableService->paginateRecordsList($request, []),
        ]);
    }   
}
