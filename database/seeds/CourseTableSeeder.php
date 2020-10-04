<?php

use App\Course;
use Illuminate\Database\Seeder;

class CourseTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Course::create(
      [
        'id' => 1,
        'course_code' => 'BSIT',
        'description' => 'Bachelor of Science in Information Technology',
      ],
    );

    Course::create(
      [
        'id' => 2,
        'course_code' => 'BSCE',
        'description' => 'Bachelor of Science in Civil Engineering',
      ],
    );

    Course::create(
      [
        'id' => 3,
        'course_code' => 'BSEE',
        'description' => 'Bachelor of Science in Electrical Engineering',
      ],
    );

    Course::create(
      [
        'id' => 4,
        'course_code' => 'BSArch',
        'description' => 'Bachelor of Science in Architecture',
      ],
    );
  }
}
