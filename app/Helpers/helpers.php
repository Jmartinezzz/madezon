<?php
function convertToCents($amount): int
{
    // Handle string input with commas or other formatting
    $cleanAmount = str_replace(['$', ',', ' '], '', (string)$amount);
    
    return (int)round((float)$cleanAmount * 100);
}