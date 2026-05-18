<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GuestController;

Route::get('/', function () {
    return view('welcome');
});

// Direct single-click RSVP route from guest invitation emails (no authentication required)
Route::get('/public/rsvp/{guest}/{status}', [GuestController::class, 'publicRsvp'])->name('public.rsvp');
