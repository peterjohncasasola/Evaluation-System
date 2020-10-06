<?php

namespace App\Http\Controllers\API;

use App\CourseSubject;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CourseSubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $course_subjects = DB::table('course_subjects')
            ->whereNull('course_subjects.deleted_at')
            ->join('courses', 'course_subjects.course_id', '=', 'courses.id')
            ->join('academic_years', 'course_subjects.sy_id', '=', 'academic_years.id')
            ->join('subjects', 'course_subjects.subject_id', '=', 'subjects.id')
            ->select(
                'subjects.code as subject_code',
                'subjects.description as subject_description',
                'subjects.unit as units',
                'subjects.lab as lab',
                'subjects.lec as lec',
                'academic_years.description as curriculum_year',
                'courses.course_code',
                'courses.description as course_description',
                "course_subjects.*",
            )
            ->get();

        return response()->json([
            'data' => $course_subjects,
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
        $messages = [
            'subject_id.unique' =>
            "selected subject already exist in the course/academic year"
        ];

        $validator = Validator::make($request->all(), [
            'sy_id' => 'required|exists:academic_years,id',
            'course_id' => 'exists:courses,id',
            'subject_id' => ['required', 'exists:subjects,id', Rule::unique('course_subjects')->where(function ($query) use ($request) {
                return $query->where([
                    ['course_id', $request->course_id],
                    ['sy_id', $request->sy_id],
                    ['subject_id', $request->subject_id],
                ]);
            })],
            'year_level' => 'required',
            'semester' => ['required', Rule::in(['First', 'Second', 'Summer'])],

        ], $messages);


        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $course_subject = new CourseSubject();

        $course_subject->fill($request->all());
        $course_subject->save();

        return response()->json([
            'data' => $this->show($course_subject->id),
            'failed' => false,
            'message' => 'successfully added'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CourseSubject  $courseSubject
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $course_subject = DB::table('course_subjects')
            ->where('course_subjects.id', '=', $id)
            ->join('courses', 'course_subjects.course_id', '=', 'courses.id')
            ->join('academic_years', 'course_subjects.sy_id', '=', 'academic_years.id')
            ->join('subjects', 'course_subjects.subject_id', '=', 'subjects.id')
            ->select(
                'subjects.code as subject_code',
                'subjects.description as subject_description',
                'subjects.unit as units',
                'subjects.lab as lab',
                'subjects.lec as lec',
                'academic_years.description as curriculum_year',
                'courses.course_code',
                'courses.description as course_description',
                "course_subjects.*",
            )
            ->get();

        return $course_subject;
    }

    public function subjectsByCourse($course_id)
    {
        $course_subjects = DB::table('course_subjects')
            ->whereColumn('course_subjects.course_id', '=', $course_id)
            ->join('courses', 'course_subjects.course_id', '=', 'courses.id')
            ->join('academic_years', 'course_subjects.sy_id', '=', 'academic_years.id')
            ->join('subjects', 'course_subjects.subject_id', '=', 'subjects.id')
            ->join('semesters', 'course_subjects.semester', '=', 'semesters.id')
            ->select(
                'subjects.description as subject_description',
                'academic_years.description as curriculum_year',
                'courses.course_code',
                'courses.description as course_description',
                'semesters.semester as  semestral',
                "course_subjects.*",

            )
            ->get();

        return response()->json([
            'data' => $course_subjects,
        ]);
    }


    /*
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CourseSubject  $courseSubject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $messages = [
            'subject_id.unique' =>
            "selected subject already exist in the course/academic year"
        ];

        $validator = Validator::make($request->all(), [
            'sy_id' => 'required|exists:academic_years,id',
            'course_id' => 'exists:courses,id',
            'subject_id' => [
                'required', 'exists:subjects,id',
                Rule::unique('course_subjects')
                    ->where(function ($query) use ($request) {
                        return $query->where([
                            ['course_id', $request->course_id],
                            ['sy_id', $request->sy_id],
                            ['subject_id', $request->subject_id],
                            ['id', '!=', $request->id],
                        ]);
                    })
            ],
            'year_level' => 'required',
            'semester' => ['required', Rule::in(['First', 'Second', 'Summer'])],

        ], $messages);



        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $course_subject = CourseSubject::findOrFail($id);
        $course_subject->update($request->all());

        return response()->json([
            'data' =>
            $this->show($course_subject->id),
            'failed' => false,
            'message' => 'successfully updated'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CourseSubject  $courseSubject
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $course_subject = CourseSubject::findOrFail($id);
        $course_subject->delete();
    }
}
