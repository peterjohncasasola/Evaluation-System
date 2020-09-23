<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->char('student_id', 15)->unique();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('sex');
            $table->string('birth_date');
            $table->string('civil_status');
            $table->text('address');
            $table->text('birth_place')->nullable();;
            $table->string('nationality')->nullable();;
            $table->string('religion')->nullable();;
            $table->string('contact_no')->nullable();;
            $table->integer('course_id');
            $table->string('guardian')->nullable();;
            $table->string('guardian_contact')->nullable();
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
        Schema::dropIfExists('students');
    }
}
