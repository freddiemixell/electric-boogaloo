const path = require('path');
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const WebpackAssetsManifest = require('webpack-assets-manifest');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const ENTRY = path.resolve( __dirname, 'frontend/index.js' );
const BUNDLE = path.resolve( __dirname, 'public' );

module.exports = {
  ...defaultConfig,
  entry: ENTRY,
  output: {
    path: BUNDLE,
  },
  plugins: [
    new WebpackAssetsManifest(),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom'
    })
  ],
  devtool: 'cheap-module-eval-source-map'
};