<?php

namespace App\View\Composers;

use DateTime;
use Roots\Acorn\View\Composer;

class Trainings extends Composer
{
    protected static $views = [
        'partials.entry-meta-*',
        'shortcodes.contact-form',
    ];

    public function with()
    {
        return [
            'start_date' => $this->getStartDate(),
            'end_date' => $this->getEndDate(),
            'price' => $this->getPrice(),
            'location' => $this->getLoc(),
            'categories' => $this->getCategories(),
            'trainer' => $this->getTrainer(),
            'register_info' => $this->getRegisterInfo(),
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

    public function getCategories()
    {
        $categories = [];
        if (!empty(get_the_terms(get_the_ID(), 'trainings_category'))) {
         		foreach (get_the_terms(get_the_ID(), 'trainings_category') as $el) {
      				array_push($categories, $el->name);
      		}
        }
        $categories = implode(', ', $categories);

        return $categories ?: false;
    }

    public function getTrainer()
    {
        $trainerSelected = function_exists('get_field') ?  get_field('select_trainer') : false;
        return $trainerSelected ?: false;
    }

    public function getRegisterInfo()
    {
        $regInfo = function_exists('get_field') ?  get_field('register_info', 'options') : false;
        return $regInfo ?: false;
    }
}
