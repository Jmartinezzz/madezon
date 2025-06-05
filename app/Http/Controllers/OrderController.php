<?php

// app/Http/Controllers/OrderController.php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Order;
use App\Models\OrderItem;
use App\Enums\OrderStatus;
use App\Events\OrderCompleted;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Admin\Product;
use App\Services\WompiService;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function __construct(public WompiService $wompiService){}

    public function checkoutIndex()
    {
        return Inertia::render('Checkout/CheckoutIndex');
    }

    public function checkout(Request $request)
    {
        $validated = $request->validate([
            'cart' => 'required|array',
            'cart.*.id' => 'required|integer|exists:products,id',
            'cart.*.quantity' => 'required|integer|min:1',
        ]);

        $cart = $validated['cart'];

        // Obtener productos desde la base de datos
        $productIds = collect($cart)->pluck('id')->all();
        $products = Product::whereIn('id', $productIds)->get()->keyBy('id');

        // Calcular total
        $total = 0;
        $currency = 'USD';

        foreach ($cart as $item) {
            $product = $products[$item['id']];
            $total += ($product->promo_price ?? $product->price) * $item['quantity'];
        }

        // Transacción
        DB::beginTransaction();

        try {
            // Crear orden
            $order = Order::create([
                'user_id' => auth()->user()->id,
                'reference' => Str::uuid(),
                'status' => OrderStatus::Pendiente,
                'amount' => $total,
                'amount_in_cents' => convertToCents($total),
                'currency' => $currency,
            ]);

            // Guardar items
            foreach ($cart as $item) {
                $product = $products[$item['id']];
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'quantity' => $item['quantity'],
                    'price' => $product->promo_price ?? $product->price,
                ]);
            }

            DB::commit();
            $authToken = $this->wompiService->getAccessToken();
            $paymentData = $this->wompiService->crearEnlacePago($order, $authToken);
            return Inertia::render('Checkout/CheckoutWidget', [
                'paymentLink' => $paymentData['urlEnlace'],
                'paymentQr' => $paymentData['urlQrCodeEnlace']
            ]);
        } catch (\Throwable $e) {
            DB::rollBack();
            report($e);
            return back()->withErrors(['message' => 'No se pudo procesar la orden.']);
        }
    }

    public function handleWompiWebhook(Request $request)
    {
        \Log::debug($request->all());
        $reference = $request->get('IdExterno', null);
        $transaction_result = $request->get('ResultadoTransaccion', null);
        $order = Order::where('reference', $reference)->first();

        if (!$order) {
            return response()->json("No item found", 400);
        }

        if ($transaction_result === "ExitosaAprobada" && $order && $order->status === OrderStatus::Pendiente) {
            $order->update(['status' => OrderStatus::Pagado]);
            OrderCompleted::dispatch($order);

            $authToken = $this->wompiService->getAccessToken();
            $this->wompiService->invalidarEnlacePago($order->payment_id, $authToken);
        }
    }
}
