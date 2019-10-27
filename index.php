<?php
/**
 * Redirect frontend requests to REST API.
 *
 * @package  Electric_Boogaloo
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
    <head>
        <?php wp_head(); ?>
    </head>

    <body <?php body_class() ?> style="min-height: 50vh;">
        <div id="page" class="site">
            <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', '_s' ); ?></a>
           
            <?php wp_body_open(); ?>

            <div id="app"></div>

            <?php wp_footer(); ?>
        </div>
    </body>
</html>
