<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CourseSubject extends Model
{
    use SoftDeletes;

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    protected $dates = ['deleted_at'];


    protected $fillable = [
        'subject_id', 'course_id',
        'sy_id',
        'year_level', 'semester', 'prerequisite'

    ];


    public function subject()
    {
        return $this->belongsTo('App\Subject');
    }

    public function course()
    {
        return $this->belongsTo('App\Course');
    }
}
