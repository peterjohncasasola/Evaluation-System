<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCourseSubjectsRecordView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
             CREATE OR REPLACE VIEW vw_courses_subjects
            AS
            SELECT
                course_subjects.*, 
                subjects.code as subject_code,
                subjects.description as subject_description,
                subjects.unit as units,
                subjects.lab as lab,
                subjects.lec as lec,
                academic_years.description as curriculum_year,
                courses.course_code,
                courses.description as course_description
            FROM 
                course_subjects 
            LEFT JOIN courses 
                ON course_subjects.course_id = courses.id
            LEFT JOIN academic_years 
                ON course_subjects.sy_id = academic_years.id
            LEFT JOIN subjects 
                ON course_subjects.subject_id = subjects.id
            
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_subjects_record_view');
    }
}
