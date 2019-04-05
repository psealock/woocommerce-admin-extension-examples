/** @format */
/**
 * External dependencies
 */
const path = require( 'path' );

const NODE_ENV = process.env.NODE_ENV || 'development';

const externals = {
  '@wordpress/api-fetch': 'window.wp.apiFetch',
  '@wordpress/blocks': 'window.wp.blocks',
  '@wordpress/components': 'window.wp.components',
  '@wordpress/compose': 'window.wp.compose',
  '@wordpress/data': 'window.wp.data',
  '@wordpress/editor': 'window.wp.editor',
  '@wordpress/element': 'window.wp.element',
  '@wordpress/hooks': 'window.wp.hooks',
  '@wordpress/html-entities': 'window.wp.htmlEntities',
  '@wordpress/i18n': 'window.wp.i18n',
  '@wordpress/keycodes': 'window.wp.keycodes',
  tinymce: 'tinymce',
  moment: 'moment',
  react: 'React',
  'react-dom': 'ReactDOM',
};

const wcAdminPackages = [
  'components',
  'csv-export',
  'currency',
  'date',
  'navigation',
  'number',
];

wcAdminPackages.forEach( name => {
  externals[ `@woocommerce/${ name }` ] = {
    this: [ 'wc', name.replace( /-([a-z])/g, ( match, letter ) => letter.toUpperCase() ) ],
  };
} );

const webpackConfig = {
  mode: NODE_ENV,
  entry: {
    'add-report': './extensions/add-report/js/index.js',
  },
  output: {
    filename: './extensions/[name]/dist/index.js',
    path: __dirname,
  },
  externals,
  module: {
    rules: [
      {
        parser: {
          amd: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ '@babel/preset-env', { loose: true, modules: 'commonjs' } ],
            ],
            plugins: [ 'transform-es2015-template-literals' ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.json', '.js', '.jsx' ],
    modules: [
      'node_modules',
    ],
    alias: {
      'gutenberg-components': path.resolve( __dirname, 'node_modules/@wordpress/components/src' ),
    },
  },
};

if ( webpackConfig.mode !== 'production' ) {
  webpackConfig.devtool = process.env.SOURCEMAP || 'source-map';
}

module.exports = webpackConfig;
