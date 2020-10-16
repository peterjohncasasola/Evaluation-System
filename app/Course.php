<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
  use SoftDeletes, ActivityLogHelper;
  protected $dates = ['deleted_at'];

  protected $hidden = [
    'created_at',
    'updated_at',
    'deleted_at'
  ];

  protected $fillable = ['course_code', 'description'];

  protected static $logName = 'course';

  public function student()
  {
    return $this->belongsTo('App\Student');
  }

  public function subjects()
  {
    return $this->hasMany(CourseSubject::class);
  }

  public function enrolledStudents()
  {
    return $this->hasMany(EnrolledStudent::class);
  }

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
