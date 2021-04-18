<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeadingController;
use App\Http\Controllers\WorkspaceController;
use Laravel\Jetstream\Http\Controllers\Livewire\TeamController;

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

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', [WorkspaceController::class,'getdata'])->name('dashboard');

Route::get('/', [TeamController::class,'getdata'])->middleware('auth');

Route::post('/workspace/save', [TeamController::class, 'saveWorkspace']);

Route::post('/heading/delete', [HeadingController::class, 'deleteHeading'])->middleware('auth');
Route::post('/heading/save', [HeadingController::class, 'saveHeading'])->middleware('auth');
Route::post('/heading/edit', [HeadingController::class, 'editHeading'])->middleware('auth');
Route::post('/heading/{id}', [HeadingController::class,'getHeading'])->middleware('auth');


Route::post('/item/delete', [WorkspaceController::class, 'deleteItem'])->middleware('auth');
Route::post('/item/save', [WorkspaceController::class, 'saveItem'])->middleware('auth');
Route::post('/item/edit', [WorkspaceController::class, 'editItem'])->middleware('auth');
Route::post('/items', [WorkspaceController::class,'getItems'])->middleware('auth');





/*
Route::get('/headings', [WorkspaceController::class,'getdata'])->middleware('auth');
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return redirect('/', [WorkspaceController::class,'getdata']);
})->name('dashboard');
Route::get('/dashboard', [WorkspaceController::class,'getdata'])->middleware('auth');
*/