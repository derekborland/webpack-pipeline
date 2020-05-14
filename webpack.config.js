const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/scripts.js',
  },
  externals: {
    jquery: 'jQuery',
  },
  // @todo:
  // Add support for more file types
  // Add linting
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        }
      }, {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sourceMap: true,
        }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/styles.css' })
  ],
};
