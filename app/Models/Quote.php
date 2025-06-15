<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Quote extends Model
{
    protected $guarded = ['id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $value ? "/storage/{$value}" : null,
        );
    }
}
