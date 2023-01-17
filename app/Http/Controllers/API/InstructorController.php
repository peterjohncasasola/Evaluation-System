<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\StoreInstructorRequest;
use App\Http\Requests\UpdateInstructorRequest;
use App\Instructor;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class InstructorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $instructor = Instructor::latest()->get();

        return response()->json([
            'data' => $instructor
        ]);
    }


    public function store(StoreInstructorRequest $request): Response
    {
        $validated = $request->validated();

        $instructor = Instructor::create($validated);

        return response()->json([
            'data' => $instructor,
            'message' => 'Successfully created'
        ], 201);
    }


    public function show($id)
    {
        $selected = Instructor::findOrFail($id);

        return response()->json([
            'data' => $selected
        ]);
    }


    public function update(UpdateInstructorRequest $request, Instructor $instructor): bool
    {
        $validated = $request->validated();
        return $instructor->update($validated);
    }

    public function destroy(Instructor $instructor)
    {
        $instructor->delete();

        return response()->json([
            'failed' => false,
            'message' => 'Successfully Deleted'
        ]);
    }
}
