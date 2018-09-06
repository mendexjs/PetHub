<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Doacao;
use Tymon\JWTAuth\Facades\JWTAuth;


class DoacaoController extends Controller{

    public function __construct() {
        $this->middleware('jwt.auth', ['except' => ['index', 'show', 'filtro', 'photoUrl']]);
    }
    
    public function filtro($cidade,$porte=null, $pelagem=null,$castrado=null, $tipo=null){
        $filtros= ['cidade' => $cidade];
        
        (int)$porte != 0 ? $filtros['porte']= (int)$porte :null;
        (int)$pelagem != 0 ? $filtros['pelagem']= (int)$pelagem:null;
        (int)$castrado != 0 ? $filtros['castrado']= (int)$castrado:null;
        (int)$tipo != 0 ? $filtros['tipo']= (int)$tipo:null;
        return Doacao::where($filtros)->get();
    }

    public function photoUrl($photoName){
        $photoPath= storage_path("app/pets/{$photoName}");
        return response()->download($photoPath);
    }



    public function perfilDoacao(){
        $token = JWTAuth::getToken();
        $apy = JWTAuth::getPayload($token)->toArray();
        $retorno= Doacao::where(['id_usuario' => $apy['sub']])->get();
        if(!$retorno) {
            return response()->json([
                'mensagem'   => 'Não há registros',
            ], 404);
        }
        return $retorno;

    }

    public function index()
    {
        return Doacao::all();
    }

    public function show($id)
    {
        $retorno = DB::table('doacaos')
            ->join('users', 'users.id', '=', 'doacaos.id_usuario')
            ->select('users.nome_user', 'users.nota_avaliacao', 'users.comercial', 'users.sexo', 'doacaos.*')
            ->where('doacaos.id', '=', $id)

            ->get();

        if(!$retorno) {
            return response()->json([
                'mensagem'   => 'Registro nao encontrado',
            ], 404);
        }

        return $retorno;
    }
    //validate
    public function store(Request $request){
        /*if( $request['id_usuario'] == null || $request["porte"] == null || $request["pelagem"] == null || $request["castrado"] == null
            || $request["tipo"] == null || $request["ano_nascimento"] == null || $request["descricao"] == null || $request["tel_contato"] == null
            || $request["endereco"] == null || $request["cidade"] == null || $request["nome_pet"] == null || $request["sexo"] == null || $request["imagem"] == null){
            return response()->json([
                'mensagem'   => 'Chaves inválidas',
                'status'       => '424',
            ], 200);
        }*/
        $filename= $request
            ->file('imagem')
            ->store('pets');
        return Doacao::create([
            "id_usuario" => (int)$request->id_usuario,
            "porte" => $request->porte,
            "pelagem" => $request->pelagem,
            "castrado" => $request->castrado,
            "tipo" => $request->tipo,
            "sexo" => $request->sexo,
            "ano_nascimento" => (int)$request->ano_nascimento,
            "descricao" => $request->descricao,
            "tel_contato" => $request->tel_contato,
            "site_contato" => $request->site_contato,
            "endereco" => $request->endereco,
            "cidade" => $request->cidade,
            "nome_pet" => $request->nome_pet,
            "imagem" => $filename
        ]);
    }

    public function update(Request $request, $id){
        $token = JWTAuth::getToken();
        $apy = JWTAuth::getPayload($token)->toArray();
        $doacao = Doacao::find($id);

        if(!$doacao) {
            return response()->json([
                'mensagem'   => 'Registro nao encontrado',
            ], 404);
        }
        // verificando se o usuário é o dono do registro
        if($doacao->id_usuario != $apy['sub']) {
            return response()->json([
                'mensagem'   => 'Registro não pertencente',
            ], 404);
        }

        $doacao->fill($request->all());
        $doacao->save();
        return response()->json($doacao);
    }
    public function destroy($id){
        $token = JWTAuth::getToken();
        $apy = JWTAuth::getPayload($token)->toArray();
        $doacao = Doacao::find($id);

        if(!$doacao) {
            return response()->json([
                'mensagem'   => 'Registro nao encontrado',
            ], 404);
        }
        // verificando se o usuário é o dono do registro
        if($doacao->id_usuario != $apy['sub']) {
            return response()->json([
                'mensagem'   => 'Registro não pertencente',
            ], 404);
        }

        $doacao->delete();
        return $doacao;
    }
}
