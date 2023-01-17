<?php

namespace App\Http\Controllers\API;

use App\Department;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Rules\Uppercase;

class DepartmentController extends Controller
{
    public function index()
    {

        $collection = Department::latest()->get();
        return response()->json([
            'data' => $collection
        ]);
    }

    public function store(Request $request)
    {
        $messages = [
            'name.unique' => 'using the same name with same description is not allowed',
            'description.unique' => ':attribute already exists in the database',
        ];

        $validator = Validator::make($request->all(), [
            'name' => [
                'required', 'alpha', 'min:3', 'max:25',
                new Uppercase,
                Rule::unique('departments')->where(function ($query) use ($request) {
                    return $query->where([
                        ['name', '=', $request->course_code],
                        ['description', '=', $request->description],
                    ]);
                })
            ],
            'description' => 'required|alpha_spaces|unique:departments,description'
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }


        $department = Department::create([
            'name' => $request['name'],
            'description' => $request['description'],
        ]);

        return response()->json([
            'data' => $department,
            'failed' => false,
            'message' => 'Department successfully added'
        ], 200);
    }

        public function show(Department $department)
    {
        $data = Department::findOrFail($department->id);

        return response()->json([
            'data' => $data
        ]);
    }

    public function update(Request $request, $id)
    {

        $messages = [
            'name.unique' => 'using the same department name with same description is not allowed',
            'description.unique' => ':attribute already exists in the database',
        ];

        $validator = Validator::make($request->all(), [
            'name' => [
                'required', 'alpha', 'min:3', 'max:20',
                new Uppercase,
                Rule::unique('departments')->where(function ($query) use ($request) {
                    return $query->where([
                        ['name', '=', $request->name],
                        ['description', '=', $request->description],
                        ['id', '!-', $request->id],
                    ]);
                })
            ],
            'description' => 'required|alpha_spaces|unique:departments,description,' . $id
        ], $messages);

        if ($validator->fails()) {
            return  response()->json([
                'failed' => true,
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $department = Department::findOrFail($id);
        $department->update($request->all());

        return response()->json([
            'failed' => true,
            'data' => $department,
            'message' => 'Successfully updated'
        ]);
    }

    public function destroy($id)
    {
        $department = Department::findOrFail($id);
        $department->delete();

        return response()->json([
            'status' => true
        ]);
    }

    public function destroyMultiple(Request $request)
    {
        $request->validate([
            'ids' => 'required|array'
        ]);

        Department::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }

    public function getCurriculumsByCourse($course_id)
    {
        $curriculums = DB::table('course_subjects')
            ->where('course_subjects.course_id', '=', $course_id)
            ->join('academic_years', 'course_subjects.sy_id', '=', 'academic_years.id')
            ->distinct('sy_id')
            ->orderBy('description')
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
                "course_subjects.*"
            )
            ->get();

        return response()->json([
            'data' => $subjectsByCourse,
        ]);
    }
}
