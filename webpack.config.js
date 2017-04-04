//var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3

module.exports = {
  context: __dirname,
  entry: "./src/scripts.js",
  output: {
    path: __dirname + "/dist",
    filename: "scripts.js"
  },
  module: {
      rules: [
        { 
          test: /\.scss$/, 
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            loader: "css-loader!sass-loader",
          }),
        },
        {
          test: /\.js$/,
          loaders: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015']
          }
        }
      ]
  },
  plugins: [
    new ExtractTextPlugin('./style.css')
  ]
};