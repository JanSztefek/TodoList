<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Heading;
use Illuminate\Support\Facades\Auth;
class HeadingController extends Controller
{
    function getdata($team_id){
        $data = Heading::where('team_id', $team_id)::orderBy('name')->get();
        return $data;
    }

}
