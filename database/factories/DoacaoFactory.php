<?php

use Faker\Generator as Faker;

$factory->define(App\Doacao::class, function (Faker $faker) {
    return [
        'id_usuario' => 1,
        'porte' => random_int(1,3),
        'pelagem' => random_int(1,2),
        'castrado' => random_int(1,2),
        'tipo' => random_int(1,2),
        'sexo' => random_int(1,2),
        'ano_nascimento' => random_int(2000,2018),
        'descricao' => $faker->country,
        'tel_contato' => '11 995891104',
        'endereco' => $faker->address,
        'cidade' => 'Braganca Paulista',
        'nome_pet' => $faker->name,
        'imagem' => $faker->firstName
    ];
});
