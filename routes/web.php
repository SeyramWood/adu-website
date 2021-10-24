<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

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

Route::get('/config', function () {
  Artisan::call('config:clear');
  Artisan::call('cache:clear');
  Artisan::call('config:cache');
  Artisan::call('storage:link');
  return 'Done';
});



Route::get('/', 'FrontEnd\PageController@index')->name('home');
Route::get('/about', 'FrontEnd\PageController@about')->name('about');
Route::get('/admissions', 'FrontEnd\PageController@admissions')->name('admissions');
Route::get('/academics', 'FrontEnd\PageController@academics')->name('academics');
Route::get('/iilab', 'FrontEnd\PageController@iilab')->name('iilab');
Route::get('/student-life', 'FrontEnd\PageController@studentLife')->name('studentLife');
Route::get('/gallery', 'FrontEnd\PageController@gallery')->name('gallery');

Route::get('/student-life/{id}/{slug}', 'FrontEnd\PageController@studentLifeDetails')->name('studentLifeDetails');
