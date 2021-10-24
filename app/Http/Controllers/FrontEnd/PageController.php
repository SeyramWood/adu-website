<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return inertia('FrontEnd/Home', [
            //
        ]);
    }

    public function about()
    {
        return inertia('FrontEnd/About', [
            //
        ]);
    }
    public function admissions()
    {
        return inertia('FrontEnd/Admissions', [
            //
        ]);
    }
    public function academics()
    {
        return inertia('FrontEnd/Academics', [
            //
        ]);
    }
    public function iilab()
    {
        return inertia('FrontEnd/IiLab', [
            //
        ]);
    }
    public function studentLife()
    {
        return inertia('FrontEnd/StudentLife', [
            //
        ]);
    }
    public function studentLifeDetails($id, $slug)
    {
        return inertia('FrontEnd/StudentLifeDetails', [
            //
        ]);
    }
    public function gallery()
    {
        return inertia('FrontEnd/Gallery', [
            //
        ]);
    }
}
