<?php

// app/Http/Controllers/OrderController.php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Order;
use App\Models\OrderItem;
use App\Enums\OrderStatus;
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
            $total += ($product->promo_price ?? $product->price) * $item['quantity']; // asume que el precio es en centavos
        }

        // Transacción
        DB::beginTransaction();

        try {
            // Crear orden
            $order = Order::create([
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

    public function webhook(Request $request)
    {
        \Log::info($request);
    }

    public function handleWompiSuccess(Request $request)
    {
        \Log::info($request);
        \Log::info($request->all());
        \Log::info('here we are');
        return 2143;
        // $reference = $request->get('reference');

        // $order = Order::where('reference', $reference)->firstOrFail();

        // // Aquí deberías validar la transacción consultando la API de Wompi con su `id`
        // // Por simplicidad, solo vamos a cambiar el estado si no está pagado
        // if ($order->status === OrderStatus::Pendiente) {
        //     // TODO: Validar con Wompi el estado real
        //     $order->update(['status' => OrderStatus::Pagado]);
        // }

        // return inertia('Checkout/Success', ['order' => $order]);
    }
}
