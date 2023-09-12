<?php
/**
 * Plugin Name:       Soivigol Block Slider
 * Description:       This a block to create a slider with any elements introduced in each item.
 * You can insert images o groups with other elements.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.1
 * Author:            David Viña
 * Author URI:        https://sovigol.dev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       soivigol-block-slider
 *
 * @package           soivigol-block-slider
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'SOIVIGOL_VERSION', '1.0.1' );
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function soivigol_block_slider_block_init() {
		register_block_type( __DIR__ . '/build/soivigol-slider/' );
		register_block_type( __DIR__ . '/build/soivigol-slider-item/' );
}
add_action( 'init', 'soivigol_block_slider_block_init' );

/**
 * Load the glider scripts and styles if is found the block in the content.
 * 
 * @param string $content Content of hte current post that is filtered.
 */
function soivigol_enqueue_glider_in_block_slider( $content ) {
	if ( str_contains( $content, 'wp-block-soivigol-soivigol-slider' ) ) {
		wp_enqueue_style(
			'soivigol-glider-block-slider-css',
			plugin_dir_url( __FILE__ ) . '/assets/lib/glider/glider.min.css',
			array(),
			SOIVIGOL_VERSION,
			null,
		);
		wp_enqueue_script(
			'soivigol-glider-block-slider-js',
			plugin_dir_url( __FILE__ ) . '/assets/lib/glider/glider.min.js',
			array(),
			SOIVIGOL_VERSION,
			true,
		);
		wp_enqueue_script(
			'soivigol-custom-block-slider-js',
			plugin_dir_url( __FILE__ ) . '/assets/js/soivigol-blocks.js',
			array( 'soivigol-glider-block-slider-js' ),
			SOIVIGOL_VERSION,
			true,
		);
	}
	return $content;
}
add_filter( 'the_content', 'soivigol_enqueue_glider_in_block_slider' );
