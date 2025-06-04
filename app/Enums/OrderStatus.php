<?php

namespace App\Enums;

enum OrderStatus: string
{
    case Pendiente = 'pendiente';
    case Pagado = 'pagado';
    case Cancelado = 'cancelado';
}
