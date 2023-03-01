<?php
/**
 * Plugin Name:       Training List
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       training-list
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_training_list_block_init()
{
	register_block_type(__DIR__ . '/build', array(
		'render_callback' => 'training_list_dynamic_render_callback'
	));
}

add_action('init', 'create_block_training_list_block_init');

function training_list_dynamic_render_callback($attr)
{
	$args = array(
		'post_type' => 'trainings',
		'post_status' => 'publish',
		'numberposts'	=> $attr['numberOfItems'],
		'meta_key' => 'begin_date',
		'orderby' => 'begin_date',
		'order' => 'ASC',
		'meta_value'   => date( "Ymd" ),
  		'meta_compare' => '>',
	);

	$posts = get_posts( $args );

	if( ! empty( $posts ) ){
		$output = '<div class="wp-block-row swiper training-list-container">';
			$output .= '<div class="swiper-wrapper">';
			foreach ( $posts as $p ){
				$begin_date = get_field("begin_date", $p->ID) ? get_field("begin_date", $p->ID) : '';
				if ($begin_date) {
					$begin_date = DateTime::createFromFormat('Y-m-d', $begin_date)->format('d.m.Y');
				}

				$end_date = get_field("end_date", $p->ID) ? get_field("end_date", $p->ID) : '';
				if ($end_date) {
					$end_date = '-'.DateTime::createFromFormat('Y-m-d', $end_date)->format('d.m.Y');
				}

				$output .=
					'<a class="d-inline-block training-list-item swiper-slide bg-white text-body" href="' . esc_url( get_permalink( $p->ID ) ) . '">
						<div class="date">'.$begin_date.'<span>'.$end_date.'</span></div>
						<div class="category text-primary text-uppercase">'.get_the_terms($p->ID, 'trainings_category')[0]->name.'</div>
						<div class="title">'.$p->post_title.'</div>
					</a>';
			}
			$output .= '</div>';

			$output .= '<div class="button-container position-relative d-flex gap-3 items-center justify-content-center mt-4">';
				$output .= '<button class="swiper-button-prev bg-transparent p-2">'.get_svg('ArrowLeft').'</button>';
				$output .= '<button class="swiper-button-next bg-transparent p-2">'.get_svg('ArrowRight').'</button>';
			$output .= '</div>';
		$output .= '</div>';
	}
	return $output ?? '<strong>Sorry. No posts matching your criteria!</strong>';

}
