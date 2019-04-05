<?php
/**
 * Plugin Name: WooCommerce Admin Extension Examples
 */

function woocommerce_admin_register_extension_scripts() {
	require_once dirname( __FILE__ ) . '/extensions/add-report/add-report.php';
}

add_action( 'plugins_loaded', 'woocommerce_admin_register_extension_scripts' );
