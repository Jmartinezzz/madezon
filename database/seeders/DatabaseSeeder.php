<?php

namespace Database\Seeders;

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
    }
}
