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
    // factory(App\Course::class, 50)->create();
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
  }
}
