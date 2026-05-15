<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VendorController extends Controller
{
    public function index(Request $request)
    {
        $vendors = Vendor::whereHas('event', function($query) use ($request) {
            $query->where('user_id', $request->user()->id);
        })->get();
        return response()->json($vendors);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'event_id' => 'required|exists:events,id',
            'name' => 'required|string|max:255',
            'category' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $vendor = Vendor::create($request->all());
        return response()->json($vendor, 201);
    }

    public function update(Request $request, Vendor $vendor)
    {
        $vendor->update($request->all());
        return response()->json($vendor);
    }

    public function destroy(Vendor $vendor)
    {
        $vendor->delete();
        return response()->json(null, 204);
    }
}
