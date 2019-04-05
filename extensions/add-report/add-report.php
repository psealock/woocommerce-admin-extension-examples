<?php
/**
 * Register javascript & css files.
 *
 * @package WC_Admin
 */

/**
 * Registers the JS.
 */
function add_report_register_script() {

	wp_register_script(
		'add-report',
		plugins_url( '/dist/index.js', __FILE__ ),
		array( 'wp-hooks', 'wp-element', 'wp-i18n' ),
		filemtime( dirname( __FILE__ ) . '/dist/index.js' )
	);

	if ( wc_admin_is_admin_page() ) {
		wp_enqueue_script( 'add-report' );
	}
}
add_action( 'admin_enqueue_scripts', 'add_report_register_script' );
