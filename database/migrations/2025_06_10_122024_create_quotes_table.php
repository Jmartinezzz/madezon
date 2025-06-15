<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('quotes', function (Blueprint $table) {
            $table->id()->startingValue(100);
            $table->foreignId('user_id')
                ->nullable()
                ->constrained()
                ->onUpdate('cascade')
                ->nullOnDelete();
            $table->unsignedTinyInteger('type');
            $table->string('url', 500);
            $table->decimal('paying_price', 10, 2)->nullable();
            $table->decimal('weight', 8,2)->nullable();
            $table->unsignedTinyInteger('quantity');
            $table->string('category');
            $table->string('image')->nullable();
            $table->string('notes')->nullable();
            $table->string('name', 150);
            $table->string('phone', 8);
            $table->string('email', 150);
            $table->decimal('quote_price', 10, 2)->nullable();
            $table->date('estimated_date')->nullable();
            $table->enum('status', ['pendiente', 'cancelado', 'en proceso', 'completado'])->default('pendiente');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quotes');
    }
};
