<?php

require_once 'training-acf.php';
//require_once 'training-shortcode.php';
require_once 'training-list/training-list.php';

function create_post_type(): void
{
    register_post_type('trainings',
        array(
            'labels' => array(
                'name' => __('Trainings', 'sage'),
                'singular_name' => __('Training', 'sage'),
                'menu_name'           => __( 'Trainings', 'sage'),
                'parent_item_colon'   => __( 'Parent Training', 'sage'),
                'all_items'           => __( 'All Trainings', 'sage'),
                'view_item'           => __( 'View Training', 'sage'),
                'add_new_item'        => __( 'Add New Training', 'sage'),
                'add_new'             => __( 'Add New', 'sage'),
                'edit_item'           => __( 'Edit Training', 'sage'),
                'update_item'         => __( 'Update Training', 'sage'),
                'search_items'        => __( 'Search Training', 'sage'),
                'not_found'           => __( 'Not Found', 'sage'),
                'not_found_in_trash'  => __( 'Not found in Trash', 'sage')
            ),
            'public' => true,
            'has_archive' => false,
            'taxonomies' => array('trainings_category'),
            'rewrite' => array('slug' => __('trainings', 'sage')),
            'menu_icon' => 'dashicons-admin-site-alt',
            'show_in_rest' => true,
            'show_ui' => true,
            'hierarchical' => false,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'show_in_admin_bar' => true,
            'can_export' => true,
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt'),
        )
    );

    register_taxonomy('trainings_category', array('trainings'), array(
        'labels' => array(
            'name' => __('Types', 'sage'),
            'singular_name' => __('Type', 'sage'),
            'search_items' =>  __( 'Search Types', 'sage' ),
            'all_items' => __( 'All Types', 'sage' ),
            'parent_item' => __( 'Parent Type', 'sage' ),
            'parent_item_colon' => __( 'Parent Type:', 'sage' ),
            'edit_item' => __( 'Edit Type', 'sage' ),
            'update_item' => __( 'Update Type', 'sage' ),
            'add_new_item' => __( 'Add New Type', 'sage' ),
            'new_item_name' => __( 'New Type Name', 'sage' ),
            'menu_name' => __( 'Types', 'sage' ),
        ),
        'hierarchical' => true,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array( 'slug' => __('trainings-category', 'sage') ),
    ));
}

add_action('init', 'create_post_type');

//Add columns to admin
add_filter('manage_trainings_posts_columns', function ($columns) {
    return array_merge($columns, array(
        'begin_date' => __('Begin date'),
    ));
});

//Add data to column
add_action('manage_trainings_posts_custom_column', function ($column_name, $post_id) {
    if ('begin_date' == $column_name) {
        echo get_field('begin_date', $post_id);
    }
}, 20, 2);
