<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['event_id', 'title', 'status', 'due_date'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
