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
		'numberposts'	=> $attr['numberOfItems'],
	);

	$posts = get_posts( $args );

	if( ! empty( $posts ) ){
		$output = '<div class="d-flex gap-4">';
		foreach ( $posts as $p ){
			$output .= '<div><a href="' . esc_url( get_permalink( $p->ID ) ) . '">'
			. $p->post_title . '</a></div>';
		}
		$output .= '</div>';
	}
	return $output ?? '<strong>Sorry. No posts matching your criteria!</strong>';

}
