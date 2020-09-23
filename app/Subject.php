<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'code',
        'description',
        'unit',
        'lab',
        'lec',
    ];
}
