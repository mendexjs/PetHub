<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doacao extends Model
{
    protected $fillable = [
        'id_usuario',
        'porte',
        'pelagem',
        'castrado',
        'sexo',
        'imagem',
        'tipo',
        'ano_nascimento',
        'descricao',
        'tel_contato',
        'endereco',
        'cidade',
        'nome_pet'
    ];
}
