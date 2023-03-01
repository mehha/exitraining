<?php

namespace App\View\Composers;

use DateTime;
use Roots\Acorn\View\Composer;

class Trainings extends Composer
{
    protected static $views = [
        'partials.entry-meta-*',
    ];

    public function with()
    {
        return [
            'start_date' => $this->getStartDate(),
            'end_date' => $this->getEndDate(),
            'price' => $this->getPrice(),
            'location' => $this->getLoc(),
        ];
    }

    public function getStartDate()
    {
        $date = function_exists('get_field') ?  get_field('begin_date') : false;

        if ($date) {
            $date = DateTime::createFromFormat('Y-m-d', $date)->format('d.m.Y');
        }

        return $date ?: false;
    }

    public function getEndDate()
    {
        $date = function_exists('get_field') ?  get_field('end_date') : false;

        if ($date) {
            $date = DateTime::createFromFormat('Y-m-d', $date)->format('d.m.Y');
        }

        return $date ?: false;
    }

    public function getPrice()
    {
        $price = function_exists('get_field') ?  get_field('price') : false;
        return $price ?: false;
    }

    public function getLoc()
    {
        $loc = function_exists('get_field') ?  get_field('location') : false;
        return $loc ?: false;
    }
}
