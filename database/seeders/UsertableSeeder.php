<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsertableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
			'name' => 'Admin',
			'email' => 'admin@admin.com',
			'password' => bcrypt('password')
		]);

		$admin->assignRole('admin');
    }
}
