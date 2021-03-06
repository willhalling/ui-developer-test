//var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3


module.exports = {
  context: __dirname,
  entry: {
      ['coding-responsively']: "./src/scripts/coding-responsively.js",
      ['javascript-coding']: "./src/scripts/javascript-coding.js"
  },
  output: {
      path: __dirname + "/dist",
      filename: "[name].js"
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
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        }
      ]
  },
  devServer: {
    contentBase: __dirname + "dist",
    compress: true,
    port: 9000
  },
  plugins: [
    new ExtractTextPlugin('./style.css'),
    new CopyWebpackPlugin([
      { from: './src/images', to: './images' },
      { from: './src/data', to: './data' }
    ]),   
  ]
};