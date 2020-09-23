<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
  use SoftDeletes;
  protected $dates = ['deleted_at'];
  // protected $hidden = [
  //   'created_at',
  //   'updated_at',
  // ];

  protected $fillable = [
    'name',
    'course_code',
    'description',
  ];

  public function students()
  {
    return $this->belongsTo('App\Student', 'courseId');
  }

  // public function subjects()
  // {
  //   return $this->hasMany('App\Subject', 'courseId');
  // }
}
