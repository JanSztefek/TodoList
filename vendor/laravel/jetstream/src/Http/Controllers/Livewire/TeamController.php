<?php

namespace Laravel\Jetstream\Http\Controllers\Livewire;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Gate;
use Laravel\Jetstream\Jetstream;
use App\Models\Team;
use Illuminate\Support\Facades\Auth;

class TeamController extends Controller
{
    /**
     * Show the team management screen.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $teamId
     * @return \Illuminate\View\View
     */
    public function show(Request $request, $teamId)
    {
        $team = Jetstream::newTeamModel()->findOrFail($teamId);

        if (Gate::denies('view', $team)) {
            abort(403);
        }

        return view('teams.show', [
            'user' => $request->user(),
            'team' => $team,
        ]);
    }

    /**
     * Show the team creation screen.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\View\View
     */
    public function create(Request $request)
    {
        Gate::authorize('create', Jetstream::newTeamModel());

        return view('teams.create', [
            'user' => $request->user(),
        ]);
    }

    function getdata(){
        $workspaces = Team::where('user_id', Auth::id())->get();
        $workspaces = $workspaces->except(['personal_team', '1'])->sortBy('name');
        return view("welcome",  ['workspaces' => $workspaces]);
    }

    function saveWorkspace(Request $req){
        //if user id is in table
        $workspace = new Team;
        $workspace->name = $req->name;
        $workspace->user_id = Auth::id();
        $workspace->personal_team = '0';
        $workspace->save();
        return $workspace->id;
    }
}
