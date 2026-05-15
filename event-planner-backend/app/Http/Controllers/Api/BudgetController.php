<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Budget;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BudgetController extends Controller
{
    public function show(Request $request, $eventId)
    {
        $budget = Budget::where('event_id', $eventId)->first();
        return response()->json($budget);
    }

    public function update(Request $request, $eventId)
    {
        $budget = Budget::updateOrCreate(
            ['event_id' => $eventId],
            $request->all()
        );
        return response()->json($budget);
    }
}
