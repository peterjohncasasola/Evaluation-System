<?php

namespace App\Http\Controllers\API;

use App\AcademicYear;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class AcademicYearController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $academicYear = AcademicYear::latest()->get();

        return response()->json([
            'data' => $academicYear
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
            'school_year' => 'required|string|max:10|unique:academic_years,school_year',
        ]);

        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }


        $academicYear = AcademicYear::create([
            'school_year' => $request['school_year'],
            'description' => $request['description'],
            'is_active  ' => true,

        ]);

        return response()->json([
            'data' => $academicYear,
            'message' => 'Successfully created'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $selected = AcademicYear::findOrFail($id);

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
            'school_year' => 'required|string|max:10|unique:academic_years,school_year,' . $id,
        ]);

        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $academicYear = AcademicYear::findOrFail($id);
        $academicYear->update($request->all());

        return response()->json([
            'failed' => true,
            'data' => $academicYear,
            'message' => 'Successfully updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function destroy(AcademicYear $academicYear)
    {
        $academicYear->delete();

        return response()->json([
            'failed' => false,
            'message' => 'Successfully Deleted'
        ]);
    }
}
