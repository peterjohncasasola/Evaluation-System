<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_subjects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('enroll_id');
            $table->string('id_number', 10)->index();
            $table->foreign('enroll_id')->references('id')->on('enrolled_students')->cascadeOnDelete();
            $table->string('student_id', 20);
            $table->string('subject_code', 20);
            $table->string('subject_description');
            $table->string('units', 10);
            $table->string('lab', 10);
            $table->string('lec', 10);
            $table->string('semester', 20);
            $table->string('school_year', 20);
            $table->string('year_level', 20);
            $table->string('grade', 5);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_subjects');
    }
}
