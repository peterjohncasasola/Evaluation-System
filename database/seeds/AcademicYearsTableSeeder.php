<?php

use Illuminate\Database\Seeder;

class AcademicYearsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($year = 2009; $year <= 2020; $year += 1) {
            # code...
            $currentYear = $year;
            \App\AcademicYear::create([
                'school_year' => $currentYear,
                'description' => 'S.Y ' . $currentYear . ' - ' . $currentYear += 1,
                'is_active' => true
            ]);
        }
    }
}
