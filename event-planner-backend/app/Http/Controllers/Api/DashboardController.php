<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Guest;
use App\Models\Vendor;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->user()->id;

        $totalEvents = Event::where('user_id', $userId)->count();
        $upcomingEvents = Event::where('user_id', $userId)->where('status', 'upcoming')->count();
        
        $totalGuests = Guest::whereHas('event', function($query) use ($userId) {
            $query->where('user_id', $userId);
        })->count();

        $totalVendors = Vendor::whereHas('event', function($query) use ($userId) {
            $query->where('user_id', $userId);
        })->count();

        $recentEvents = Event::where('user_id', $userId)
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get();

        return response()->json([
            'stats' => [
                'total_events' => $totalEvents,
                'upcoming_events' => $upcomingEvents,
                'total_guests' => $totalGuests,
                'total_vendors' => $totalVendors,
            ],
            'recent_events' => $recentEvents
        ]);
    }
}
