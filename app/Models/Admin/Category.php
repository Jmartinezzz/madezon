<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Traits\ClearDashboardCache;

class Category extends Model
{
    use ClearDashboardCache;

    protected $fillable = ['name'];

    public function subCategories(): HasMany
    {
        return $this->hasMany(SubCategory::class);
    }
}
