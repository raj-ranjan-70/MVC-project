<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Services\EventService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EventController extends Controller
{
    protected $eventService;

    public function __construct(EventService $eventService)
    {
        $this->eventService = $eventService;
    }

    public function index(Request $request)
    {
        $events = $this->eventService->getAllEvents($request->user()->id);
        return response()->json($events);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'event_type' => 'required|string',
            'event_date' => 'required|date',
            'budget' => 'nullable|numeric',
            'guest_count' => 'nullable|integer',
            'venue' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $data = $request->all();
        $data['user_id'] = $request->user()->id;

        $event = $this->eventService->createEvent($data);

        return response()->json($event, 201);
    }

    public function show(Event $event)
    {
        $this->authorize('view', $event);
        return response()->json($event->load(['budget', 'guests', 'vendors', 'tasks', 'timelines']));
    }

    public function update(Request $request, Event $event)
    {
        $this->authorize('update', $event);

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'event_type' => 'sometimes|required|string',
            'event_date' => 'sometimes|required|date',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $event = $this->eventService->updateEvent($event, $request->all());

        return response()->json($event);
    }

    public function destroy(Event $event)
    {
        $this->authorize('delete', $event);
        $this->eventService->deleteEvent($event);
        return response()->json(null, 204);
    }
}
