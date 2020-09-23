<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'Mary Grace Verbo',
            'username' => 'mgverbo',
            'source_id' => 0,
            'email' => 'marygrace@example.com',
            'user_type' => 'admin',
            'password' => bcrypt('secret')
        ]);

        \App\User::create([
            'name' => 'Juan Cruz',
            'username' => 'jcruz',
            'source_id' => 1,
            'user_type' => 'Student',
            'email' => 'juandcruz@example.com',
            'password' => bcrypt('secret')
        ]);

        \App\User::create([
            'name' => 'Roman Alex Lustro',
            'username' => 'ralustro',
            'source_id' => 1,
            'user_type' => 'Instructor',
            'email' => 'romanlustro@example.com',
            'password' => bcrypt('secret')
        ]);

        \App\User::create([
            'name' => 'Angelo Gamara',
            'username' => 'lordgamara',
            'source_id' => 0,
            'user_type' => 'Chairman',
            'email' => 'angelogamara@example.com',
            'password' => bcrypt('secret')
        ]);
    }
}
