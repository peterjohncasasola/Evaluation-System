<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_subjects', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('course_id');
            $table->unsignedBigInteger('subject_id');
            $table->unsignedBigInteger('sy_id')->nullable();
            $table->foreign('course_id')->references('id')->on('courses')->onDelete('restrict')->cascadeOnUpdate();
            $table->foreign('subject_id')->references('id')->on('subjects')->onDelete('restrict')->cascadeOnUpdate();
            $table->string('prerequisite')->nullable();
            $table->string('year_level', 20);
            $table->string('semester', 15);
            $table->foreign('sy_id')->references('id')->on('academic_years')->onDelete('restrict')->cascadeOnUpdate();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_subjects');
    }
}
