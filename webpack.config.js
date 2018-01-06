const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = {
  entry: [
    './src/index.js'
  ],
  target: 'electron-main',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: ['react', 'es2015', 'stage-1']
            }
          }
        },
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/
        }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 4172
  }
};
