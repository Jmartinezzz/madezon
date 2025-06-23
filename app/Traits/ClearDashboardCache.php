<?php

namespace App\Traits;

use Illuminate\Support\Facades\Cache;

trait ClearDashboardCache
{
    protected static function bootClearDashboardCache()
    {
        static::created(function () {
            Cache::forget('dashboard_stats');
        });

        static::deleted(fn() => Cache::forget('dashboard_stats'));
    }
}