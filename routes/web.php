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

Route::group(array('prefix' => 'api'), function()
{
  Route::get('/', function () {
      return response()->json(['mensagem' => 'PetHub API', 'status' => 'Conectado']);;
  }); 
});
*/
Route::get('/api', function () {
    return response()->json(['mensagem' => 'PetHub API', 'status' => 'Conectado']);;
});
Route::get('/', function () {
    return view('spa');
});

Route::name('photo.pet')->get("imagem/pets/{photoName}", "DoacaoController@photoUrl");
Route::name('photo.user')->get("imagem/users/{photoName}", 'UserController@photoUrl');
