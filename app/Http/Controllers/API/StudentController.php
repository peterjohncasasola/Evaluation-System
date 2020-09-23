<?php

namespace App\Http\Controllers\API;

use App\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students = Student::latest()->get();

        return response()->json([
            'data' => $students
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
            'studentId' => 'required|string|unique:students,studentId',
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'birthDate' => 'required|date',
            'address' => 'required|string',
            'sex' => 'required|string',
            'courseId' => 'required|integer',
            'civilStatus' => 'required|string',
        ]);

        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }




        $student = Student::create([
            'studentId' => $request->studentId,
            'firstName' => $request->firstName,
            'middleName' => $request->middleName,
            'lastName' => $request->lastName,
            'birthDate' => $request->lastName,
            'civilStatus' => $request->civilStatus,
            'birthPlace' => $request->birthPlace,
            'address' => $request->address,
            'contactNo' => $request->contactNo,
            'guardian' => $request->guardian,
            'sex' => $request->sex,
            'nationality' => $request->nationality,
            'religion' => $request->religion,
            'courseId' => $request->courseId,
        ]);

        return response()->json([
            'data' => $student,
            'message' => 'Student Successfully created'
        ], 201);
    }


    public function show($id)
    {
        $selected = Student::findOrFail($id);

        return response()->json([
            'data' => $selected
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|string|min:3|max:10|unique:students,code,' . $id,
            'description' => 'required|string|required|unique:students,description,' . $id,
        ]);

        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $subject = Student::findOrFail($id);
        $subject->update($request->all());

        return response()->json([
            'failed' => true,
            'data' => $subject,
            'message' => 'Successfully updated'
        ]);
    }

    public function destroy($id)
    {
        $student = Student::find($id);
        $student->delete();

        return response()->json([
            'failed' => false,
            'message' => 'Successfully Deleted'
        ]);
    }
}
