<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Team;
use App\Models\Workspace;
use Illuminate\Support\Facades\Auth;
class WorkspaceController extends Controller
{
    function getWorkspace(){
        $workspaces = Team::where('user_id', Auth::id())->get();
        $workspaces = $workspaces->except(['personal_team', '1']);
        return view("dashboard",  ['workspaces' => $workspaces]);
    }

    function getDataById($team_id){
        $data = Workspace::where('team_id', $team_id)->get();
        return $data;
    }

    function saveWorkspace(Request $req){
        $workspace = new Team;
        $workspace->name = $req->name;
        $workspace->user_id = Auth::id();
        $workspace->personal_team = '0';
        $workspace->save();
        return $workspace->id;
    }

    function createHeading(Request $req){
    
    }
    
    function createItem(Request $req){
        
    }
}
