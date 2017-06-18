const merge = require('webpack-merge');
const paths = require('./lib/paths');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = merge(require('./webpack.config'), {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        include: paths.SCRIPTS,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({
      configFile: './.stylelintrc.json',
      context: paths.STYLES,
      syntax: 'scss',
      quiet: true,
    }),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: paths.BUILD,
  },
});
