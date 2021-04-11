<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkspaceController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WorkspaceController::class,'getdata'])->middleware('auth');

Route::post('/save', [WorkspaceController::class, 'saveWorkspace']);

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', [WorkspaceController::class,'getdata'])->name('dashboard');


/*
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return redirect('/', [WorkspaceController::class,'getdata']);
})->name('dashboard');
Route::get('/dashboard', [WorkspaceController::class,'getdata'])->middleware('auth');
*/