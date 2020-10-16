<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

/*
 * Clients management
 * */
Route::prefix('/clients')->group(function () {
    Route::get('', 'ClientsController@index');
    // Route::get('{client}', 'ClientsController@show');
    Route::post('store', 'ClientsController@store');
    Route::post('destroy', 'ClientsController@destroyMass');
    Route::delete('{client}/destroy', 'ClientsController@destroy');
});

/*
 * Current user
 * */
Route::prefix('/user')->group(function () {
    Route::get('', 'CurrentUserController@show');
    Route::get('/my-logs', 'CurrentUserController@userLogsByCurrentUser');
    Route::patch('', 'CurrentUserController@update');
    Route::patch('/password', 'CurrentUserController@updatePassword');
});


Route::group(['prefix' => 'api', 'middleware' => ['autotrim']], function () {
    Route::apiResources([
        'courses' => 'API\CourseController',
        'users' => 'API\UserController',
        'subjects' => 'API\SubjectController',
        'students' => 'API\StudentController',
        'instructors' => 'API\InstructorController',
        'courses-subjects' => 'API\CourseSubjectController',
        'academic-years' => 'API\AcademicYearController',
    ]);
    Route::get('courses/{course}/subjects', 'API\CourseSubjectController@subjectsByCourse');
    Route::get('settings/semesters/set/{id}', 'SettingController@setCurrentSem');
    Route::get('settings/semesters', 'SettingController@getSemesters');
    Route::get('settings/semesters/current', 'SettingController@getCurrentSem')->name('current-sem');
    Route::get('settings/academic-gradings', 'SettingController@getAcademicGradings');
    Route::get('courses/{course}/curriculums', 'API\CourseController@getCurriculumsByCourse');
});




Route::get('{path}', "HomeController@index")->where('path', '[\/\w\.-]*');

Route::fallback(function () {
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact the Administrator'
    ], 404);
});

// Route::get('/{vue_capture?}', function () {
//     return view('layouts.master');
// })->where('vue_capture', '[\/\w\.-]*');