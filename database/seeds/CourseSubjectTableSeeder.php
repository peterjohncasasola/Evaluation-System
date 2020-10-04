<?php

use Illuminate\Database\Seeder;

class CourseSubjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\CourseSubject::class, 20)->create();
    }
}
