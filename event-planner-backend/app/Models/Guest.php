<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Guest extends Model
{
    use HasFactory;

    protected $fillable = ['event_id', 'name', 'email', 'phone', 'rsvp_status', 'side', 'notes'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
