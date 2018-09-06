<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Métodos Padão API
Route::resource('doacao', 'DoacaoController');
Route::resource('user', 'UserController');

Route::post('auth/login', 'AuthController@authenticate');
Route::get('auth/check', 'UserController@checkAuth');
Route::get('auth/refresh', 'UserController@refreshToken');


// Busca com filtros
Route::get('busca/doacao/{cidade}/{porte?}/{pelagem?}/{castrado?}/{tipo?}', "DoacaoController@filtro");
// Busca todas doações cadastradas para este usuário
Route::get("perfil/doacao", "DoacaoController@perfilDoacao");
Route::get("perfil", "UserController@perfil");
Route::get("perfil/{id}", "UserController@show");
