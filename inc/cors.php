<?php
/**
 * REST API CORS filter.
 * 
 * We're allowing everything since REST is disabled and OAuth2
 *
 * @package  Electric_Boogaloo
 */

add_action( 'init', function() {
		header("Access-Control-Allow-Origin: *");
		header("Access-Control-Allow-Credentials: true");
		header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
		header('Connection: keep-alive');	
} );
