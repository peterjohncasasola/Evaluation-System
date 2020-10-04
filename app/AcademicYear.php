<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AcademicYear extends Model
{
    use SoftDeletes;
    protected $fillable = ['id', 'school_year', 'description'];
    protected $dates = ['deleted_at'];
}
