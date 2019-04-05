
/** @format */
/**
 * External dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const Report = () => {
	return (
		<div>Hello World</div>
	);
}

/**
 * Use the 'woocommerce-reports-list' filter to add a report page.
 */
addFilter( 'woocommerce-reports-list', 'woocommerce-admin-extensions-examples', reports => {
  return [
    ...reports,
	  {
		  report: 'example',
		  title: __( 'Example', 'woocommerce-admin-extensions-examples' ),
		  component: Report
	  }
  ];
} );
