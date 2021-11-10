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
    public function studentLifeCampuse($slug)
    {
        return inertia('FrontEnd/StudentLifeCampuse', [
            'lifeType' => fn () => $slug
        ]);
    }
    public function studentLifeSpotlight($id, $slug)
    {
        return inertia('FrontEnd/StudentLifeSpotlight', [
            //
        ]);
    }
    public function iilabEvents()
    {
        return inertia('FrontEnd/IilabEvents', [
            //
        ]);
    }
    public function iilabEntrepreneures()
    {
        return inertia('FrontEnd/IilabEntrepreneure', [
            //
        ]);
    }
    public function gallery()
    {
        return inertia('FrontEnd/Gallery', [
            //
        ]);
    }
    public function donate()
    {
        return inertia('FrontEnd/Donate', [
            //
        ]);
    }
}
