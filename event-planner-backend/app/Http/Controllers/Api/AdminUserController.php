<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Message;
use App\Models\Notification;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::orderBy('created_at', 'desc');
        
        if ($request->has('role')) {
            $query->where('role', $request->role);
        }

        return response()->json($query->get());
    }

    public function show($id)
    {
        $user = User::with(['events', 'vendor'])->findOrFail($id);
        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $validated = $request->validate([
            'is_active' => 'boolean',
            'role' => 'in:admin,planner,vendor'
        ]);

        $oldIsActive = $user->is_active;

        $user->update($validated);

        // Check if status is changed for a vendor
        if (isset($validated['is_active']) && $user->role === 'vendor') {
            $newIsActive = $validated['is_active'];
            if ($oldIsActive && !$newIsActive) {
                // Suspended: Send message from Admin
                $adminId = $request->user()->id;
                Message::create([
                    'sender_id' => $adminId,
                    'receiver_id' => $user->id,
                    'message' => 'Your account has been suspended by the administrator. Please chat here if you have any questions or would like to submit an appeal.',
                    'is_read' => false,
                ]);

                Notification::create([
                    'user_id' => $user->id,
                    'title' => 'Account Suspended',
                    'message' => 'Your account has been suspended by the administrator.',
                    'type' => 'message',
                    'is_read' => false,
                ]);
            } else if (!$oldIsActive && $newIsActive) {
                // Reactivated: Send message from Admin
                $adminId = $request->user()->id;
                Message::create([
                    'sender_id' => $adminId,
                    'receiver_id' => $user->id,
                    'message' => 'Your account has been reactivated. Thank you for your patience!',
                    'is_read' => false,
                ]);

                Notification::create([
                    'user_id' => $user->id,
                    'title' => 'Account Reactivated',
                    'message' => 'Your account has been reactivated by the administrator.',
                    'type' => 'message',
                    'is_read' => false,
                ]);
            }
        }

        return response()->json($user);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        // Prevent deleting the main admin
        if ($user->email === 'admin@aura.com') {
            return response()->json(['message' => 'Cannot delete the primary admin account.'], 403);
        }
        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }
}
