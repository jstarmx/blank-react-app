const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const path = require('path');
const paths = require('./lib/paths');
const webpack = require('webpack');

const config = {
  entry: [
    path.join(paths.STYLES, 'app.scss'),
    path.join(paths.SCRIPTS, 'app.jsx'),
  ],
  output: {
    path: paths.BUILD,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: paths.STYLES,
        loader: 'import-glob-loader',
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        include: paths.SCRIPTS,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: paths.STYLES,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: paths.IMAGES, to: paths.BUILD },
      { from: paths.VIEWS, to: paths.BUILD },
    ]),
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new OfflinePlugin(),
  ],
};

module.exports = config;
