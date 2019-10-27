const path = require('path');
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

const ENTRY = path.resolve( __dirname, 'frontend/index.js' );
const BUNDLE = path.resolve( __dirname, 'public' );

module.exports = {
  ...defaultConfig,
  entry: ENTRY,
  output: {
    filename: 'app.js',
    path: BUNDLE
  }
};