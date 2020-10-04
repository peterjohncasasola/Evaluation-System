<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CourseSubject;
use Faker\Generator as Faker;

$factory->define(CourseSubject::class, function (Faker $faker) {
    return [
        // 'units' => $faker->randomDigit,
        // 'lab' => $faker->randomDigit,
        // 'lec' => $faker->randomDigit,
        'year_level' => "First Year",
        'semester' =>  "First",
        // 'subject_code' => $faker->ean8,
        'sy_id' =>  $faker->numberBetween(1, 11),
        'course_id' => $faker->numberBetween(1, 4),
        'subject_id' => $faker->numberBetween(1, 100),
        'created_at' => now(),
    ];
});
