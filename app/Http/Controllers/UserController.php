<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;
use Tymon\JWTAuth\Facades\JWTAuth;
class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['index', 'show', 'store', 'photoUrl']]);
    }

    public function checkAuth(){
        return response()->json([
            'status' => 'autenticado',
        ],200);
    }
    public function refreshToken(){
        $newToken = JWTAuth::parseToken()->refresh();
        return response()->json([
            'status' => 'autenticado',
            'newToken' => $newToken
        ],200);
    }

    public function perfil(){
        $token = JWTAuth::getToken();
        $apy = JWTAuth::getPayload($token)->toArray();
        $retorno =  User::select('nome_user', 'nota_avaliacao','email', 'comercial','sexo','updated_at','imagem', 'localizacao')
            ->where(['id' => $apy['sub']])
            ->get();

        return $retorno;
    }

    public function index(){
        return User::select('nome_user', 'nota_avaliacao', 'comercial','sexo', 'localizacao')->get();
    }

    public function show($id){
        return User::select('nome_user', 'nota_avaliacao', 'comercial','imagem', 'sexo')->where(['id' => $id])->get();
    }

    public function photoUrl($photoName){
        $photoPath= storage_path("app/users/{$photoName}");
        return response()->download($photoPath);
    }


    public function store(Request $request){
        if(!isset($request["nome_user"]) || !isset($request["email"]) || !isset($request["senha"]) || !isset($request["localizacao"])
            || !isset($request["sexo"]) || !isset($request["data_nasc"])){
            return response()->json([
                'mensagem'   => "Chaves inválidas "
            ], 424);
        }

        $user = new User();
        $user->fill($request->all());
        $user->save();
        return response()->json($user, 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $token = JWTAuth::getToken();
        $apy = JWTAuth::getPayload($token)->toArray();
        if(!$user) {
            return response()->json([
                'mensagem'   => 'Registro nao encontrado',
            ], 404);
        }
        // verificando se o usuário é o dono do registro
        if($user->id != $apy['sub']) {
            return response()->json([
                'mensagem'   => 'Registro não pertencente',
            ], 404);
        }
        $user->fill($request->all());
        $user->save();

        return response()->json($user);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $token = JWTAuth::getToken();
        $apy = JWTAuth::getPayload($token)->toArray();
        if(!$user) {
            return response()->json([
                'mensagem'   => 'Registro nao encontrado',
            ], 404);
        }
        // verificando se o usuário é o dono do registro
        if($user->id != $apy['sub']) {
            return response()->json([
                'mensagem'   => 'Registro não pertencente',
            ], 404);
        }

        $user->delete();
    }
}
