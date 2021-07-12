<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Task;
use Illuminate\Support\Str;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(faker $faker)
    {
        for ($i =0; $i < 10; $i++) {
            $new_task = new Task();

            $new_task->title = $faker->sentence(rand(2,6));
            $new_task->note = $faker->text(rand(50,100));

            // Genero il mio Slug
            $new_task->slug = Str::slug($new_task->title, '-');
            
            $new_task->user_id = 1;

            $new_task->save();
        }
    }
}
