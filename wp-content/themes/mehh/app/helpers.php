<?php

/**
 * Theme helpers.
 */

namespace App;

add_filter('body_class', function($classes){
    global $post;
    if (is_page() && get_field('wide_layout', $post->ID)) $classes[] = 'wide-layout';
    if ((is_single() || is_page()) && has_post_thumbnail()) $classes[] = 'has-top-image';
    if (!get_field('hide_sidebar', $post->ID)) $classes[] = 'has-sidebar';
    return $classes;
});
