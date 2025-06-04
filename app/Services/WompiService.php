<?php

namespace App\Services;

use App\Models\Order;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\ValidationException;

class WompiService
{
    public function getAccessToken(): string
    {
        return Cache::remember('wompi_access_token', now()->addMinutes(58), function () {
            $response = Http::asForm()->post('https://id.wompi.sv/connect/token', [
                'grant_type' => 'client_credentials',
                'client_id' => config('wompi.app_id'),
                'client_secret' => config('wompi.api_secret'),
                'audience' => '',
            ]);

            if (!$response->successful()) {
                \Log::info('error ' . $response->body());
            }
            return $response->json()['access_token'];
        });
    }

    public function crearEnlacePago(Order $order, string $token)
    {
        $order->load('items.product');
        $response = Http::withToken($token)
            ->post('https://api.wompi.sv/EnlacePago', [
                'identificadorEnlaceComercio' => $order->reference,
                'monto' => $order->amount,
                'nombreProducto' => $this->order_details($order->items),
                // 'configuracion' => [
                //     "duracionInterfazIntentoMinutos" => 10,
                //     "urlWebhook" => "https://b993-190-53-30-163.ngrok-free.app/checkout/success",
                //     "notificarTransaccionCliente" => true
                // ]
            ]);
        if(isset($response->json()['serviceError'])) {
            return response()->json([], 400);
        }
        $payment_data = $response->json();
        $order->update([
            'payment_link' => $payment_data['urlEnlace'],
            'payment_qr' => $payment_data['urlQrCodeEnlace']
        ]);
        return $payment_data;
    }

    private function order_details($items) 
    {
        $details = "";
        foreach($items as $item){ 
            $details .= $item->product->name . ' x ' . $item->quantity . PHP_EOL;
        }
        return $details;
    }
}
