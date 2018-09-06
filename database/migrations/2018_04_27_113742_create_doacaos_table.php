<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoacaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doacaos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_usuario')->unsigned();
            $table->enum('porte', ['pequeno','medio', 'grande']);
            $table->enum('pelagem', ['curto', 'longo']);
            $table->enum('castrado', [0, 1]);
            $table->enum('tipo', ['cachorro', 'gato']);
            $table->enum('sexo', ['M', 'F']);
            $table->integer('ano_nascimento')->unsigned();
            $table->String('descricao', 255);
            $table->String('tel_contato',12);
            $table->String('site_contato',64)->nullable();
            $table->String('endereco',64);
            $table->String('cidade', 32);
            $table->String('nome_pet', 32);
            $table->String('imagem', 64);

            $table->foreign('id_usuario')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doacaos');
    }
}
