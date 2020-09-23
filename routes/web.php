<?php

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
    Route::patch('', 'CurrentUserController@update');
    Route::patch('/password', 'CurrentUserController@updatePassword');
});

/*
 * File upload (e.g. avatar)
 * */
Route::post('/files/store', 'FilesController@store');

Route::get('{path}', "HomeController@index")->where('path', '[\/\w\.-]*');

// Route::get('/{vue_capture?}', function () {
//     return view('layouts.master');
// })->where('vue_capture', '[\/\w\.-]*');