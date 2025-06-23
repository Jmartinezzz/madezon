<?php
function convertToCents($amount): int
{
    // Handle string input with commas or other formatting
    $cleanAmount = str_replace(['$', ',', ' '], '', (string)$amount);

    return (int)round((float)$cleanAmount * 100);
}

function transformToLabelValue($collection, $customLabel = null, $customValue = null)
{
    return $collection->map(function ($item) use ($customLabel, $customValue) {
        return [
            'label' => $customLabel ? $item->{$customLabel} : $item->name,
            'value' => $customValue ? $item->{$customValue} : $item->id
        ];
    });
}
