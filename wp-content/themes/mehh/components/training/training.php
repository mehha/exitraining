<?php

require_once 'training-acf.php';
require_once 'training-list/training-list.php';

function create_post_type(): void
{
    register_post_type('trainings',
        array(
            'labels' => array(
                'name' => __('Trainings', 'sage'),
                'singular_name' => __('Training', 'sage')
            ),
            'public' => true,
            'has_archive' => true,
            'taxonomies' => array('category'),
            'rewrite' => array('slug' => 'trainings'),
            'menu_icon' => 'dashicons-admin-site-alt',
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt'),
        )
    );
}

add_action('init', 'create_post_type');
