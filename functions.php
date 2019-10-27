<?php
/**
 * Electric Boogaloo React Apollo Theme
 *
 * @package  Electric_Boogaloo
 */

// Go Away jQuery.
add_action( 'wp_enqueue_scripts', function() {
	wp_dequeue_script('jquery');
    wp_deregister_script('jquery');
} );

// Register Script
function register_electric_scripts() {

	$isDev = ( defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG );

	$react_path = 'https://gzip-scripts.s3.amazonaws.com/react.prod.js.gz';
	$react_dom_path = 'https://gzip-scripts.s3.amazonaws.com/react-dom.prod.js.gz';

	// wp_register_script( 'awesome-react', $react_path, array(), false, true );
	// wp_enqueue_script( 'awesome-react-dom', $react_dom_path, array( 'awesome-react' ), false, true );
	
	wp_register_script( 'electric_scripts', get_stylesheet_directory_uri() . '/public/app.js', array( 'wp-element' ), time(), true );
	wp_enqueue_script( 'electric_scripts' );

}
add_action( 'init', 'register_electric_scripts' );

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
