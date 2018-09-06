<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->String('nome_user');
            $table->String('imagem')->default('users/user.jpg');
            $table->String('email');
            $table->String('senha');
            $table->String('localizacao');
            $table->enum('sexo',['M','F']);
            $table->decimal('nota_avaliacao', 2,1)->nullable();
            $table->date('data_nasc');
            $table->enum('comercial', [0,1])->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
