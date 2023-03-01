<?php

//Add the shortcode
add_shortcode('trainings-date', function () {
    ob_start();
    print view('partials.entry-meta-trainings-date', ['left_aligned' => false])->render();
    return ob_get_clean();
});

add_shortcode('trainings-price', function () {
    ob_start();
    print view('partials.entry-meta-trainings-price')->render();
    return ob_get_clean();
});

add_shortcode('trainings-location', function () {
    ob_start();
    print view('partials.entry-meta-trainings-location')->render();
    return ob_get_clean();
});
