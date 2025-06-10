<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    public function redirect(string $network_driver) 
    {
        $redirectUrl = Socialite::driver($network_driver)->redirect()->getTargetUrl();
        return response('', 409)->header('X-Inertia-Location', $redirectUrl);
    }

    public function facebookCallback() 
    {
       return $this->generalCallback('facebook');
    }
    
    public function googleCallback()
    {
       return $this->generalCallback('google');
    }

    public function generalCallback(string $network_driver)
    {
        $user_info = Socialite::driver($network_driver)->user();
        $user = User::firstOrCreate([
            'email' => $user_info->getEmail(),
        ], [
            'name' => $user_info->getName(),
            'has_social_login' => true,
            'social_network' => $network_driver,
        ]);

        Auth::login($user);
        return redirect(route('home', absolute: false));
    }
}
