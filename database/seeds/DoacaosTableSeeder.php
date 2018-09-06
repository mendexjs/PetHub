<?php

use Illuminate\Database\Seeder;
use App\Doacao;
class DoacaosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Doacao::class,20)->create();
        //
    }
}
