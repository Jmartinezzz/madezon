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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->constrained()->onUpdate('cascade');
            $table->uuid('reference')->unique();
            $table->enum('status', ['cancelado', 'pendiente', 'pagado'])->default('pendiente');
            $table->decimal('amount', 10,2);
            $table->unsignedBigInteger('amount_in_cents');
            $table->string('payment_id')->nullable();
            $table->string('payment_link')->nullable();
            $table->string('payment_qr')->nullable();
            $table->datetime('payment_expiry_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
