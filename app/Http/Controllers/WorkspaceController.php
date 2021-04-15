<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workspace;
use Illuminate\Support\Facades\Auth;
class WorkspaceController extends Controller
{
   
    // get all record by col 'heading_id'
    function getItems(Request $req){
        $item_list = Workspace::where('heading_id', $req->heading_id)->get();
        return $item_list;
    }

    function saveItem(Request $req){
        $item = new Workspace();
        $item->owner_id = Auth::id();
        $item->heading_id = $req->heading_id;
        $item->description = $req->description;
        $item->date = $req->date;
        $item->status = $req->status;
        $item->priority = $req->priority;
        $item->save();
        return $item->id;
    }

    function deleteItem(Request $req){
        $item = Workspace::where('id', $req->id)->delete();
        if($item){
            return 'success';
        }
        else{
            return 'failed';
        }
    }
    
    
    function editItem(Request $req){
       // return $req;
        //$item = Workspace::find((int)$req->id);
        $item = Workspace::where('id', $req->id)->first();
        // Make sure you've got the Page model
        //return $req;
        if($item) {
            if($req->column == 'status'){
                $item->status = $req->value;
            }
            elseif($req->column == 'priority'){
                $item->priority = $req->value;
            }
            elseif($req->column == 'description'){
                $item->description = $req->value;
            }
            $item->save();
            return "success";
        }
        else{
            return "failed";
        }
    }
}
