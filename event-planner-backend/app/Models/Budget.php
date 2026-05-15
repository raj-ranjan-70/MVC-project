<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Budget extends Model
{
    use HasFactory;

    protected $fillable = ['event_id', 'total_budget', 'spent_amount'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
