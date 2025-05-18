<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;

class RefreshLayout
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->hasSession()) {
            $previousAdminState = $request->session()->get('user') ?? null;
            $currentAdminState = $request->user()?->role;

            \Log::info($previousAdminState);
            if ($previousAdminState !== $currentAdminState) {
                $request->session()->put('user', $currentAdminState);
                \Log::debug("se actualizo");
                return Inertia::location($request->fullUrl());
            }
        }
        return $next($request);
    }
}
