<?php

namespace App\Http\Controllers\API;

use App\Course;
use App\CourseSubject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $courses = Course::with(['subjects'])->latest()->get();


        // $courses = \App\CourseSubject::with(['subject', 'course'])->get();

        return response()->json([
            'data' => $courses
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'course_code' => 'required|string|min:3|max:10|unique:courses,course_code',
            'description' => 'required|string|required|unique:courses,description'
        ]);

        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }


        $course = Course::create([
            'course_code' => $request['course_code'],
            'description' => $request['description'],
        ]);

        return response()->json([
            'data' => $course,
            'failed' => false,
            'message' => 'Course successfully added'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        $selectedCourse = Course::findOrFail($course->id);

        return response()->json([
            'data' => $selectedCourse
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'course_code' => 'required|string|min:3|max:10|unique:courses,course_code,' . $id,
            'description' => 'required|string|required|unique:courses,description,' . $id,
        ]);

        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $course = Course::findOrFail($id);
        $course->update($request->all());

        return response()->json([
            'failed' => true,
            'data' => $course,
            'message' => 'Successfully updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Course::findOFail($id)->delete();

        return response()->json([
            'status' => true
        ]);
    }

    public function destroyMultiple(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        Course::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }

    public function getCurriculumsByCourse($course_id)
    {
        $curriculums = DB::table('course_subjects')
            ->where('course_subjects.course_id', '=', $course_id)
            ->join('academic_years', 'course_subjects.id', '=', 'academic_years.id')
            ->get(['description as curriculum']);

        return response()->json([
            'data' => $curriculums,
        ]);
    }

    public function subjectsByCourse($course_id)
    {
        $subjectsByCourse = DB::table('course_subjects')
            ->where('course_subjects.course_id', '=', $course_id)
            ->join('courses', 'course_subjects.course_id', '=', 'courses.id')
            ->join('academic_years', 'course_subjects.sy_id', '=', 'academic_years.id')
            ->join('subjects', 'course_subjects.subject_id', '=', 'subjects.id')
            ->join('semesters', 'course_subjects.semester', '=', 'semesters.id')
            ->select(
                'subjects.description as subject_description',
                'academic_years.description as curriculum_year',
                'courses.course_code',
                'courses.description as course_description',
                'semesters.semester as  ',
                "course_subjects.*",

            )
            ->get();

        return response()->json([
            'data' => $subjectsByCourse,
        ]);
    }
}
