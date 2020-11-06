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


Route::group(['prefix' => 'api', 'middleware' => ['autotrim','auth']], function () {
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
    Route::get('student/subjects/remaining', 'API\StudentSubjectController@remainingSubjects');
    Route::post('student/subjects', 'API\StudentSubjectController@store');
    Route::put('student/subjects/update', 'API\StudentSubjectController@updateGrades');
    Route::delete('student/subjects/{id}', 'API\StudentSubjectController@destroy');
    Route::get('students/{id}/subjects', 'API\StudentSubjectController@index');
    Route::get('settings/semesters/set/{id}', 'SettingController@setCurrentSem');
    Route::get('sy/current', 'API\AcademicYearController@getCurrentSY');
    Route::get('academic-years/{id}/set-current', 'API\AcademicYearController@setCurrentSY');
    Route::get('settings/semesters', 'SettingController@getSemesters');
    Route::get('settings/grading-system', 'SettingController@getAcademicGradings');
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
