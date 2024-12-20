<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_6dada4300edft5',
        'title' => __('Training settings', 'sage'),
        'fields' => array(
            array(
                'key' => 'field_63e8c1650773f',
                'label' => __('Begin date', 'sage'),
                'name' => 'begin_date',
                'aria-label' => '',
                'type' => 'date_picker',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'display_format' => 'j. M Y',
                'return_format' => 'Y-m-d',
                'first_day' => 1,
            ),
            array(
                'key' => 'field_63e8c1650cfgh',
                'label' => __('End date', 'sage'),
                'name' => 'end_date',
                'aria-label' => '',
                'type' => 'date_picker',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'display_format' => 'j. M Y',
                'return_format' => 'Y-m-d',
                'first_day' => 1,
            ),
            array(
                'key' => 'field_63e8c1650drtg',
                'label' => __('Price', 'sage'),
                'name' => 'price',
                'aria-label' => '',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
            ),
            array(
                'key' => 'field_63e8c1650cft6',
                'label' => __('Location', 'sage'),
                'name' => 'location',
                'aria-label' => '',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
            ),
            array(
                'key' => 'field_641334687f42d',
                'label' => __('Select trainer', 'sage'),
                'name' => 'select_trainer',
                'aria-label' => '',
                'type' => 'post_object',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'post_type' => array(
                    0 => 'trainers',
                ),
                'taxonomy' => '',
                'return_format' => 'object',
                'multiple' => 0,
                'allow_null' => 1,
                'ui' => 1,
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'trainings',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'side',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
        'show_in_rest' => true
    ));
endif;

//General training options page
if( function_exists('acf_add_options_page') ):

    acf_add_options_sub_page(array(
        'page_title'     => __('Training general options', 'sage'),
        'menu_title'    => __('Training general options', 'sage'),
        'parent_slug'    => 'edit.php?post_type=trainings',
    ));

    acf_add_local_field_group(array (
        'key' => 'group_5besasa8c49cf56',
        'title' => __('Training general options', 'sage'),
        'fields' => array (
            array (
                'key' => 'field_5beadaadi33asvghj',
                'label' => __('Register info', 'sage'),
                'name' => 'register_info',
                'type' => 'wysiwyg',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array (
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),

        ),
        'location' => array (
            array (
                array (
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'acf-options-training-general-options',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => 1,
        'description' => '',
    ));

endif;
