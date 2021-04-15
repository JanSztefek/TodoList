<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Heading;
use App\Models\Workspace;
use Doctrine\Inflector\Rules\Word;
use Illuminate\Support\Facades\Auth;
class HeadingController extends Controller
{
    
    // get all records
    function getHeading(Request $req){
        $headings = Heading::where('team_id', $req->team_id )->get()->sortBy('created_at');;
        return $headings;
    }

    function saveHeading(Request $req){
        //if user id is in table!
        $heading = new Heading;
        $heading->team_id = (int)$req->workspace_id;
        $heading->name = $req->name;
        $heading->color = $req->color;
        $heading->user_id = Auth::id();
        $heading->save();
        return $heading->id;
    }

    function deleteHeading(Request $req){
        $heading = Heading::where('id', (int)$req->id)->delete();
        $items = Workspace::where('heading_id', (int)$req->id)->delete();
        if($heading){
            return 'success';
        }
        else{
            return 'failed';
        }
    }


    function editHeading(Request $req){
        // return $req;
         //$item = Workspace::find((int)$req->id);
         $heading = Heading::where('id', $req->id)->first();
         // Make sure you've got the Page model
         //return $req;
         if($heading) {
             if($req->column == 'name'){
                 $heading->name = $req->value;
             }
             elseif($req->column == 'color'){
                 $heading->color = $req->value;
             }
             $heading->save();
             return "success";
         }
         else{
             return "failed";
         }
     }

}
