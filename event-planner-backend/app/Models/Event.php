<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'title', 'description', 'event_type', 'venue', 
        'event_date', 'guest_count', 'budget', 'status', 'cover_image'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function guests()
    {
        return $this->hasMany(Guest::class);
    }

    public function vendors()
    {
        return $this->hasMany(Vendor::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function timelines()
    {
        return $this->hasMany(Timeline::class);
    }

    public function budget()
    {
        return $this->hasOne(Budget::class);
    }
}
