const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(config, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
    ],
  },
  plugins: []
});
