<?php
/**
 * Add GraphQL resolvers
 *
 * @package  Electric_Boogaloo
 */

// check if WPGraphQL plugin is active.
if ( function_exists( 'register_graphql_field' ) ) {
    // Add header menu resolver.
    require_once 'resolvers/header-menu.php';
}
