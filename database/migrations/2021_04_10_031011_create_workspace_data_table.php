<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkspaceDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workspace_data', function (Blueprint $table) {
            $table->id();
            $table->foreignId('owner')->index();
            $table->string('name');
            $table->string('date');
            $table->string('status');//class
            $table->string('priority');
            //$table->string('comments');//
            $table->boolean('personal_team');
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
        Schema::dropIfExists('workspace_data');
    }
}
