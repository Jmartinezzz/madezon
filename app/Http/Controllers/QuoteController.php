<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Quote;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\QuoteRequest;

class QuoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Quotes/QuotesIndex');
    }

    /**
     * Display a listing of the resource.
     */
    public function create()
    {
        return Inertia::render('Quotes/QuotesCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(QuoteRequest $request)
    {
        $attributes = $request->validated();
        $image = $request->file('image');

        unset($attributes['image']);
        $attributes['user_id'] = auth()->id();
        $quote = Quote::create($attributes);
        if ($image && $image->isValid()) {
            $randomName = Str::random(10) . "_" . time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs("quotes/", $randomName, 'public');
            $quote->image = "quotes/{$randomName}";
            $quote->save();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Quote $quote)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Quote $quote)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Quote $quote)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Quote $quote)
    {
        //
    }
}
