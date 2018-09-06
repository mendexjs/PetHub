<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use JWTAuth;
use Hash;

class AuthController extends Controller
{

    public function authenticate(Request $request) {


        // validação JSON request
        if($request->email == null || $request->password == null){
            return response()->json([
                'message' => 'Falhou na validação, chaves incorretas',
            ], 422);
        }

        // buscar user pelo email
        $user = User::where('email', $request->email)->first();

        // Validar usuario existente
        if(!$user) {
            return response()->json([
                'error' => 'Usuário não encontrado'
            ], 401);
        }

        // Validar senha
        /*if (!Hash::check($request->password, $user->senha)) {
            return response()->json([
                'error' => 'Credenciais inválidas se'
            ], 401);
        }*/
        if($request->password != $user->senha){
            return response()->json([
                'error' => 'Senha inválida'
            ], 401);
        }

        // Gerar Token
        $token = JWTAuth::fromUser($user);

        // Gerar expiration
        $objectToken = JWTAuth::setToken($token);
        $expiration = JWTAuth::decode($objectToken->getToken())->get('exp');

        return response()->json([
            'user_id' => $user->id,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $expiration
        ]);
    }
}