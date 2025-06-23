<?php

namespace Database\Seeders;

use App\Models\Admin\Category;
use App\Models\Admin\SubCategory;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test Admin',
            'email' => 'admin@madezon.com',
            'role' => 'admin',
            'password' => Hash::make('password')
        ]);
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@test.com',
            'role' => 'user',
            'password' => Hash::make('password')
        ]);

        Category::insert([['name' => 'Categoria 1'], ['name' => 'test']]);
        SubCategory::insert([['category_id' => 1, 'name' => 'sub 1'], ['category_id' => 2, 'name' => 'sub test']]);
    }
}
