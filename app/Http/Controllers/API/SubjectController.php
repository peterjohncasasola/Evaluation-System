<?php

namespace App\Http\Controllers\API;

use App\Subject;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subjects = Subject::latest()->get();

        return response()->json([
            'data' => $subjects
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
            'code' => 'required|string|min:3|max:10|unique:subjects,code',
            'description' => 'required|string|required|unique:subjects,description'
        ]);

        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }


        $course = Subject::create([
            'code' => $request['code'],
            'description' => $request['description'],
            'unit' => $request['unit'],
            'lab' => $request['lab'],
            'lec' => $request['lec'],
        ]);

        return response()->json([
            'data' => $course,
            'message' => 'Subject Successfully created'
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
        $selected = Subject::findOrFail($id);

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
            'code' => 'required|string|min:3|max:10|unique:subjects,code,' . $id,
            'description' => 'required|string|required|unique:subjects,description,' . $id,
        ]);

        if ($validator->fails()) {
            return  response()->json([
                'errors' => $validator->errors(),
                'message' => 'Something went wrong.'
            ], 422);
        }

        $subject = Subject::findOrFail($id);
        $subject->update($request->all());

        return response()->json([
            'failed' => true,
            'data' => $subject,
            'message' => 'Successfully updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subject $subject)
    {
        $subject->delete();

        return response()->json([
            'failed' => false,
            'message' => 'Successfully Deleted'
        ]);
    }
}
