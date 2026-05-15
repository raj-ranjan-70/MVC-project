<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'type', 'slug'];

    public function events()
    {
        return $this->hasMany(Event::class, 'event_type', 'slug');
    }

    public function vendors()
    {
        return $this->hasMany(Vendor::class);
    }
}
