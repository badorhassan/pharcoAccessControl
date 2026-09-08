<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});
Route::resource('posts', PostController::class);

Route::get('/posts/create', function () {
    return Inertia::render('Create');
});