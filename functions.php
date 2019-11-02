<?php
/**
 * Electric Boogaloo React Apollo Theme
 *
 * @package  Electric_Boogaloo
 */

// // Register Script
add_action( 'wp_enqueue_scripts', 'register_electric_scripts' );

function register_electric_scripts(){
	$base_dir = trailingslashit(get_template_directory());
	$public_js_dir = '/public/';
	$js_glob = glob( $base_dir . $public_js_dir . '*.js' );

    foreach( $js_glob as $file ) {
		// $file contains the name and extension of the file
		$url = $public_js_dir.basename($file);
        wp_enqueue_script( $file, get_template_directory_uri(). $url, null, time(), true );
    }
}

// Frontend origin.
require_once 'inc/frontend-origin.php';

// ACF commands.
require_once 'inc/class-acf-commands.php';

// Logging functions.
require_once 'inc/log.php';

// CORS handling.
require_once 'inc/cors.php';

// Admin modifications.
require_once 'inc/admin.php';

// Add Menus.
require_once 'inc/menus.php';

// Add Headless Settings area.
require_once 'inc/acf-options.php';

// Add GraphQL resolvers.
require_once 'inc/graphql/resolvers.php';
