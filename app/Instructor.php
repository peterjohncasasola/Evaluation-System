<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Instructor extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = ['first_name', 'middle_name', 'contract_status', 'last_name', 'min_units', 'max_units', 'email', 'specialization', 'is_active'];
}
