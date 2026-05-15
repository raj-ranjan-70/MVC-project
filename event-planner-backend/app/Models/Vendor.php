<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;

    protected $fillable = ['event_id', 'name', 'category', 'pricing', 'location', 'contact_info', 'availability', 'status'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
